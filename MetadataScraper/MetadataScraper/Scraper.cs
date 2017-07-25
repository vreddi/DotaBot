using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Newtonsoft.Json;

namespace MetadataScraper
{
    public static class Scraper
    {
        static HttpClient Client = new HttpClient();

        const string OpenDotaEndpoint = "https://api.opendota.com/";

        const string DotabuffEndpoint = "https://dotabuff.com/";

        const string DotabuffHeroesPathFormat = "/heroes/{0}";

        private const string DotabuffHeroSkillsClass = "hero-secondary-ability-icons";

        public static async Task<List<OpenDotaHero>> GetAllHeroes(List<OpenDotaHero> oldHeroData = null)
        {
            var openDotaHeroesRequest = await Client.GetAsync(new Uri(OpenDotaEndpoint + "api/heroStats"));
            var openDotaHeroes = JsonConvert.DeserializeObject<List<OpenDotaHero>>(await openDotaHeroesRequest.Content.ReadAsStringAsync());

            foreach (var openDotaHero in openDotaHeroes)
            {
                Console.WriteLine("Processing " + openDotaHero.localized_name);

                var dotabuffHeroPath = string.Format(DotabuffHeroesPathFormat,
                    string.Join("-", openDotaHero.localized_name.Replace("'", string.Empty).ToLowerInvariant().Split(' ')));
                var dotabuffHeroUrl = DotabuffEndpoint + dotabuffHeroPath;
                var htmlWeb = new HtmlWeb();
                var dotabuffDoc = htmlWeb.Load(dotabuffHeroUrl);

                var skillsDiv = dotabuffDoc.DocumentNode.Descendants()
                    .SingleOrDefault(d => d.GetAttributeValue("class", "").Contains(DotabuffHeroSkillsClass));
                if (skillsDiv == null)
                {
                    continue;
                }

                var skillsUrls = skillsDiv.Descendants("img")
                    .Select(e => e.GetAttributeValue("data-tooltip-url", string.Empty))
                    .ToList();

                // Remove Talents icon
                skillsUrls.RemoveAt(skillsUrls.Count - 1);

                openDotaHero.skills = skillsUrls.Select(skillsUrl => htmlWeb.Load(DotabuffEndpoint + skillsUrl))
                    .Select(ParseSkill)
                    .ToList();

                openDotaHero.talents = ParseTalents(dotabuffDoc);
            }

            if (oldHeroData != null)
            {
                foreach (var hero in openDotaHeroes)
                {
                    var oldHero = oldHeroData.FirstOrDefault(h => h.name.Equals(hero.name));
                    if (oldHero != null)
                    {
                        hero.aliases = new List<string>();
                        if (oldHero.aliases != null)
                        {
                            hero.aliases.AddRange(oldHero.aliases);
                            hero.aliases = hero.aliases.Distinct().ToList();
                        }
                    }
                }
            }

            return openDotaHeroes;
        }

        public static List<Talent> ParseTalents(HtmlDocument doc)
        {
            var talents = new List<Talent>();
            var talentRows = doc.DocumentNode.Descendants("tr")
                .Where(d => d.GetAttributeValue("class", "").Contains("talent-data-row"));
            foreach (var talentRow in talentRows)
            {
                var talent = new Talent();
                talent.Level = int.Parse(talentRow.FirstChild.FirstChild.InnerHtml);

                var talentOptions = talentRow.Descendants("div")
                    .Where(d => d.GetAttributeValue("class", "").Contains("talent-name"));
                talent.Options.AddRange(talentOptions.Select(t => t.InnerHtml));

                talents.Add(talent);
            }

            return talents;
        }

        public static Skill ParseSkill(HtmlDocument skillDocument)
        {
            var skill = new Skill();
            var skillImage = skillDocument.DocumentNode.Descendants("img")
                .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("image-skill"));
            if (skillImage != null)
            {
                skill.Image = DotabuffEndpoint + skillImage.Attributes["src"].Value;
                skill.LocalizedName = skillImage.Attributes["alt"].Value;

                var skillTooltipSplit = skillImage.Attributes["data-tooltip-url"].Value.Split('/')[2];
                var skillSplit = skillTooltipSplit.Split('-');
                skill.Id = int.Parse(skillSplit.Last());

                skill.Name = string.Join("-", skillSplit.Take(skillSplit.Length - 1));
            }

            var abilityLink = skillDocument.DocumentNode.Descendants("a")
                .FirstOrDefault(d => d.GetAttributeValue("href", "").Contains("abilities"));

            if (abilityLink != null)
            {
                skill.Link = DotabuffEndpoint + abilityLink.Attributes["href"].Value;
            }

            var skillEffects = skillDocument.DocumentNode.Descendants("div")
                .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("effects"));

            if (skillEffects != null)
            {
                foreach (var effect in skillEffects.Descendants("p"))
                {
                    var effectKey = effect.FirstChild?.Attributes["class"].Value;
                    var effectValue = effect.LastChild.InnerHtml;
                    skill.Effects.Add(new KeyValuePair<string, string>(effectKey, effectValue));
                }
            }

            var description = skillDocument.DocumentNode.Descendants("div")
                .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("description"));

            if (description != null)
            {
                skill.Description = description.FirstChild.InnerText;
            }

            var statEffects = skillDocument.DocumentNode.Descendants("div")
                .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("stats"));

            if (statEffects != null)
            {
                foreach (var statEffectsChildNode in statEffects.ChildNodes)
                {
                    var statEffect = new StatEffect();
                    statEffect.Label = statEffectsChildNode.FirstChild.InnerHtml.Trim(':', ' ');
                    var values = statEffectsChildNode.LastChild;
                    foreach (var valuesChildNode in values.Descendants("span"))
                    {
                        statEffect.Values.Add(valuesChildNode.InnerHtml);
                    }

                    skill.Stats.Add(statEffect);
                }
            }

            var cooldown = skillDocument.DocumentNode.Descendants("div")
                .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("cooldown"));

            if (cooldown != null)
            {
                var cooldownValues = cooldown.Descendants("span")
                    .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("value"));

                if (cooldownValues != null)
                {
                    skill.Cooldown.AddRange(cooldownValues.ChildNodes.Where(c => c.GetAttributeValue("class", "").Equals("number")).Select(c => double.Parse(c.InnerHtml)));
                }
            }

            var manacost = skillDocument.DocumentNode.Descendants("div")
                .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("manacost"));

            if (manacost != null)
            {
                var manacostValues = manacost.Descendants("span")
                    .FirstOrDefault(d => d.GetAttributeValue("class", "").Contains("value"));

                if (manacostValues != null)
                {
                    skill.ManaCost.AddRange(manacostValues.ChildNodes.Where(c => c.GetAttributeValue("class", "").Equals("number")).Select(c => int.Parse(c.InnerHtml)));
                }
            }

            return skill;
        }
    }
}

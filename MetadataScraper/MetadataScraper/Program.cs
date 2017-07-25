using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MetadataScraper
{
    public class Program
    {
        private static JsonSerializerSettings jsonSerializerSettings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            Formatting = Formatting.Indented
        };

        private static readonly string HeroesMetadataDirectory = @"C:\Repos\DotaBot\Metadata\Heroes\";

        private static readonly string HeroesMetadataHeroFormat = @"C:\Repos\DotaBot\Metadata\Heroes\{0}.json";

        private static readonly string LuisHeroEntriesPath = @"C:\Repos\DotaBot\Metadata\Luis\HeroEntries.json";

        public static void Main(string[] args)
        {
            var success = AsyncMain().Result;
        }

        public static async Task<bool> AsyncMain()
        {
            Console.WriteLine("Enter 1 to parse all hero data");
            Console.WriteLine("Enter 2 to generate Luis hero data entries");

            var line = Console.ReadLine();

            if (line.Contains("1"))
            {
                await ParseHeroData();
            }
            else if (line.Contains("2"))
            {
                await CreateLuisHeroData();
            }

            return true;
        }

        private static async Task CreateLuisHeroData()
        {
            var heroes = await GetOpenDotaHeroes();

            var luisList = new List<LuisEntry>();

            foreach (var hero in heroes)
            {
                var entry = new LuisEntry { canonicalForm = hero.name, list = { hero.localized_name } };
                if (hero.aliases != null)
                {
                    entry.list.AddRange(hero.aliases);
                }

                luisList.Add(entry);
            }

            File.WriteAllText(LuisHeroEntriesPath,
                JsonConvert.SerializeObject(luisList, jsonSerializerSettings));
        }

        private static async Task ParseHeroData()
        {
            var heroes = await GetOpenDotaHeroes();

            WriteHeroFiles(heroes);
        }

        private static void WriteHeroFiles(List<OpenDotaHero> heroes)
        {
            foreach (var hero in heroes)
            {
                File.WriteAllText(string.Format(HeroesMetadataHeroFormat, hero.name),
                    JsonConvert.SerializeObject(hero, jsonSerializerSettings));
            }
        }

        private static async Task<List<OpenDotaHero>> GetOpenDotaHeroes()
        {
            var heroes = new List<OpenDotaHero>();
            var files = Directory.GetFiles(HeroesMetadataDirectory);

            // File exists for all heroes
            if (files.Length >= 113)
            {
                foreach (var file in files)
                {
                    var fileContent = File.ReadAllText(file);
                    heroes.Add(JsonConvert.DeserializeObject<OpenDotaHero>(fileContent));
                }
            }
            else
            {
                heroes = await Scraper.GetAllHeroes();
            }

            return heroes;
        }
    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MetadataScraper
{
    class Program
    {
        static void Main(string[] args)
        {
            var success = AsyncMain().Result;
        }

        static async Task<bool> AsyncMain()
        {
            List<OpenDotaHero> heroes;
            if (File.Exists(@"C:\Repos\DotaBot\Metadata\Heroes.json"))
            {
                var fileContent = File.ReadAllText(@"C:\Repos\DotaBot\Metadata\Heroes.json");
                heroes = JsonConvert.DeserializeObject<List<OpenDotaHero>>(fileContent);
            }
            else
            {
                heroes = await Scraper.GetAllHeroes();
            }

            var serializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            foreach (var hero in heroes)
            {
                File.WriteAllText($@"C:\Repos\DotaBot\Metadata\Heroes\{hero.name}.json", JsonConvert.SerializeObject(hero, serializerSettings));
            }

            return true;
        }
    }
}

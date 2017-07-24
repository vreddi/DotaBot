using System;
using System.Collections.Generic;
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
            var heroes = await Scraper.GetAllHeroes();
            var serializerSettings = new JsonSerializerSettings()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            System.IO.File.WriteAllText(@"C:\Repos\DotaBot\Metadata\Heroes.json", JsonConvert.SerializeObject(heroes, serializerSettings));

            return true;
        }
    }
}

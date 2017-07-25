using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetadataScraper
{
    public class LuisEntry
    {
        public LuisEntry()
        {
            this.list = new List<string>();
        }

        public string canonicalForm { get; set; }

        public List<string> list { get; set; }
    }
}

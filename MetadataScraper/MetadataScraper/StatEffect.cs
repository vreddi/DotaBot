using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetadataScraper
{
    public class StatEffect
    {
        public StatEffect()
        {
            this.Values = new List<string>();
        }

        public string Label { get; set; }

        public List<string> Values { get; set; }
    }
}

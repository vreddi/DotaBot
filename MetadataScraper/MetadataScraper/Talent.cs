using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetadataScraper
{
    public class Talent
    {
        public Talent()
        {
            this.Options = new List<string>();
        }

        public int Level { get; set; }

        public List<string> Options { get; set; }
    }
}

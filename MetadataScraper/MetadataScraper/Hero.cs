using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetadataScraper
{
    [Serializable]
    public class Hero
    {
        public int Id { get; set; }

        public string LocalizedName { get; set; }

        public string Primary { get; set; }

        public string Description { get; set; }

        public string Lore { get; set; }

        public string Image { get; set; }

        public List<string> Aliases { get; set; }

        public List<Skill> Skills { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetadataScraper
{
    [Serializable]
    public class Skill
    {
        public Skill()
        {
            this.Effects = new List<KeyValuePair<string, string>>();
            this.Cooldown = new List<double>();
            this.Stats = new List<StatEffect>();
            this.ManaCost = new List<int>();
        }

        public string Name { get; set; }

        public string LocalizedName { get; set; }

        public int Id { get; set; }

        public string Image { get; set; }

        public string Link { get; set; }

        public string Description { get; set; }

        public List<KeyValuePair<string, string>> Effects { get; set; }

        public List<StatEffect> Stats { get; set; }

        public List<double> Cooldown { get; set; } 

        public List<int> ManaCost { get; set; }
    }
}

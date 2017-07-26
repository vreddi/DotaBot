const Skill = require('./Skill');

class Hero {
    constructor(data) {
        var skills = data.skills || [];

        this.id = data.id;
        this.name = data.name;
        this.localized_name = data.localized_name;
        this.primary_attr = data.primary_attr;
        this.base_health = data.base_health;
        this.base_mana = data.base_mana;
        this.base_attack_min = data.base_attack_min;
        this.base_attack_max = data.base_attack_max;
        this.move_speed = data.move_speed;
        this.attack_type = data.attack_type;
        this.roles = data.roles;
        this.description = data.description;
        this.lore = data.lore;
        this.img = "https://api.opendota.com" + data.img;
        this.aliases = data.aliases;
        this.base_str = data.base_str;
        this.base_agi = data.base_agi;
        this.base_int = data.base_int;
        this.str_gain = data.str_gain;
        this.agi_gain = data.agi_gain;
        this.int_gain = data.int_gain;
        this.skills = skills.map(function(skillData) { return new Skill(skillData); });
    }
}

module.exports = Hero;

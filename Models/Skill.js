class Skill {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.localizedName = data.localizedName;
        this.link = data.link;
        this.image = data.image;
        this.description = data.description;
        this.effects = data.effects;
        this.stats = data.stats;
        this.cooldown = data.cooldown;
        this.manaCost = data.manaCost;
    }
}

module.exports = Skill;

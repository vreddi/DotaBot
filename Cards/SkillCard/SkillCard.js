let SkillCardAttachment = require('./SkillCardAttachment');

class SkillCard {

    constructor(skillData) {
        this.name = skillData.localizedName;
        this.image = skillData.image;
        this.description = skillData.description;
        this.link = skillData.link;
        this.effects = skillData.effects;
        this.stats = skillData.stats;
        this.cooldown = skillData.cooldown;
        this.manaCost = skillData.manaCost;

        this.cardAttachment = SkillCardAttachment;

        // Skill description
        this.cardAttachment['content']['body'][0]['columns'][0]['items'][0]['text'] = this.name;
        this.cardAttachment['content']['body'][0]['columns'][0]['items'][1]['text'] = this.description;

        this.cardAttachment['content']['body'][0]['columns'][0]['items'][2]['facts'] = [];
        if (this.cooldown.length) {
            this.cardAttachment['content']['body'][0]['columns'][0]['items'][2]['facts'].push({
                "title": "Cooldown:",
                "value": this.cooldown.join(" / ")
            })
        }

        if (this.manaCost.length) {
            this.cardAttachment['content']['body'][0]['columns'][0]['items'][2]['facts'].push({
                "title": "Mana Cost:",
                "value": this.manaCost.join(" / ")
            })
        }

        // Skill image
        this.cardAttachment['content']['body'][0]['columns'][1]['items'][0]['url'] = this.image;

        // Populate effects and stats
        // Empty items
        this.cardAttachment['content']['body'][1]['items'][0]['facts'] = [];

        if (skillData.effects) {
            skillData.effects.forEach(effect => {
                this.cardAttachment['content']['body'][1]['items'][0]['facts'].push(
                    {
                        "title": effect.key + ": ",
                        "value": effect.value
                    })
            })
        }

        if (skillData.stats) {
            skillData.stats.forEach(statEffect => {
                this.cardAttachment['content']['body'][1]['items'][0]['facts'].push(
                    {
                        "title": statEffect.label + ": ",
                        "value": statEffect.values.join(" / ")
                    })
            })
        }
    }
}

module.exports = SkillCard;

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
        this.cardAttachment['content']['body'][0]['columns'][0]['items'][2]['facts'][0]['value'] = this.cooldown;
        this.cardAttachment['content']['body'][0]['columns'][0]['items'][2]['facts'][0]['value'] = this.manaCost;

        // Skill image
        this.cardAttachment['content']['body'][0]['columns'][1]['items'][0]['url'] = this.link;

        // Populate effects and stats
        // Empty items
        this.cardAttachment['content']['body'][1]['items'][0]['facets'] = [];
        this.cardAttachment['content']['body'][1]['items'][1]['facets'] = [];

        if (skillData.effects) {
            skillData.effects.forEach(effect => {
                this.cardAttachment['content']['body'][1]['items'][0]['facets'].push(
                    {
                            "title": effect.key + ": ",
                            "value": effect.value
                    })
            })
        }

        if (skillData.stats) {
            skillData.stats.forEach(statEffect => {
                this.cardAttachment['content']['body'][1]['items'][1]['facets'].push(
                    {
                        "title": statEffect.label + ": ",
                        "value": statEffect.values.join(" / ")
                    })
            })
        }
    }
}

module.exports = SkillCard;

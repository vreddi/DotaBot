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

        // Todo; more
        // Clear the list
        this.cardAttachment['content']['body'][2]['columns'] = [];

        // Populate hero skills
        if(heroData.skills) {
            heroData.skills.forEach(skill => {
                this.cardAttachment['content']['body'][2]['columns'].push({
                    "type": "Column",
                    "size": "20",
                    "items": [

                        {
                            "type": "Image",
                            "size": "auto",
                            "url": skill.image
                        },
                        {
                            "type": "TextBlock",
                            "horizontalAlignment": "center",
                            "wrap": true,
                            "text": skill.localizedName
                        }
                    ],
                    "selectAction": {
                        "type": "Action.OpenUrl",
                        "url": skill.link
                    }
                });
            });
        }
    }

    getAttributeColor(attribute) {
        switch(attribute) {
            case "Strength":
                // Red
                return "warning";

            case "Agility":
                // Green
                return "good";

            case "Intelligence":
                // Blue
                return "accent";

            default:
                return "";
        }
    }
	
	getFriendlyHeroAttributeString(query) {		
		let friendlyStrings = {		
			"agi": "Agility",		
			"melee": "Melee",		
			"str": "Strength",		
			"int": "Intelligence"		
		}		

		return friendlyStrings[query] === undefined ? query : friendlyStrings[query];		
	}
}

module.exports = HeroCard;

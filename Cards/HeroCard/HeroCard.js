const HeroSkills = require('../../Metadata/HeroSkills');
let HeroCardAttachment = require('./HeroCardAttachment');

class HeroCard {

    constructor(heroData) {
        this.name = heroData.name;
        this.image = heroData.image;
        this.attribute = heroData.attribute;
        this.baseHealth = heroData.baseHealth;
        this.baseMana = heroData.baseMana;
        this.attackDamage = heroData.attackDamage;
        this.movementSpeed = heroData.movementSpeed;

        this.cardAttachment = HeroCardAttachment;

        // Populate card header content
        this.cardAttachment['content']['body'][0]['items'][0]['columns'][0]['items'][0]['url'] = this.image;
        this.cardAttachment['content']['body'][0]['items'][0]['columns'][1]['items'][0]['text'] = "**" + this.name + "**";
        this.cardAttachment['content']['body'][0]['items'][0]['columns'][1]['items'][1]['text'] = this.attribute;
        this.cardAttachment['content']['body'][0]['items'][0]['columns'][1]['items'][1]['color'] = this.getAttributeColor(this.attribute);

        // Populate hero details
        this.cardAttachment['content']['body'][1]['items'][0]['facts'][0]['value'] = this.baseHealth.toString();
        this.cardAttachment['content']['body'][1]['items'][0]['facts'][1]['value'] = this.baseMana.toString();
        this.cardAttachment['content']['body'][1]['items'][0]['facts'][2]['value'] = this.attackDamage;
        this.cardAttachment['content']['body'][1]['items'][0]['facts'][3]['value'] = this.movementSpeed.toString();

        // Populate hero skills
        if(heroData.steamName && HeroSkills[heroData.steamName]) {
            HeroSkills[heroData.steamName].forEach(skill => {
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
                            "text": skill.name
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
}

module.exports = HeroCard;

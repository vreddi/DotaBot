const axios = require('axios');
const Hero = require('./Hero');

const OpenDotaBaseUri = "https://api.opendota.com";

class HeroFactory {

    constructor() {
        this.heros = [];
    }

    getHeros() {
        return axios.get(OpenDotaBaseUri + '/api/heroStats').then((response) => {

            for(let id = 0; id < response.data.length; ++id) {

                let data = response.data[id],
                    hero = new Hero();

                hero.steamName = data.name;
                hero.name = data.localized_name;
                hero.primaryAttr = this.getFriendlyHeroAttributeString(data.primary_attr);
                hero.roles = data.roles;
                hero.legs = data.legs;
                hero.movementSpeed = data.move_speed;
                hero.baseHealth = data.base_health;
                hero.baseMana = data.base_mana;
                hero.baseDamage = data.base_attack_min + ' - ' + data.base_attack_max;
                hero.image = OpenDotaBaseUri + data.img;
                hero.icon = OpenDotaBaseUri + data.icon;

                this.heros[data.id] = hero;
            }
        });
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

module.exports = HeroFactory;

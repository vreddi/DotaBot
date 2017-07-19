const builder = require('botbuilder');
const HeroFactory = require('../Models/HeroFactory');
const HeroCard = require('../Cards/HeroCard/HeroCard');

class HeroDialog {

    constructor(bot) {
        this.bot = bot;
        this.heroFactory = new HeroFactory();

        // Set basic get hero dialog
        this.bot.dialog('getHero', [
            (session) => {
                builder.Prompts.text(session, "Please provide the HeroID...");
            },
            (session, results) => {
                if(this.heroFactory.heros.length == 0) {
                    this.heroFactory.getHeros().then(() => {
                        let heroCard = this.getHeroCard(parseInt(results.response)),
                            msg = new builder.Message(session).addAttachment(heroCard.cardAttachment);
                        session.send(msg);
                        session.endDialog();
                    }).catch(() => {
                        session.send('Something went wrong. Try again.');
                        session.endDialog();
                    });
                }
                else {
                    let heroCard = this.getHeroCard(parseInt(results.response)),
                        msg = new builder.Message(session).addAttachment(heroCard.cardAttachment);
                    session.send(msg);
                    session.endDialog();
                }
            }
        ]);
    }

    getHeroCard(heroId) {
        let hero = this.heroFactory.heros[heroId],
            heroCard = new HeroCard({
                steamName: hero.steamName,
                name: hero.name,
                image: hero.image,
                attribute: hero.primaryAttr,
                baseHealth: hero.baseHealth,
                baseMana: hero.baseMana,
                attackDamage: hero.baseDamage,
                movementSpeed: hero.movementSpeed,
            });

        return heroCard;
    }
}

module.exports = HeroDialog;

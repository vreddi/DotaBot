const builder = require('botbuilder');
const HeroCard = require('../Cards/HeroCard/HeroCard');

class HeroDialog {

    constructor(bot) {
        this.bot = bot;
        this.heroFactory = null;
        this.data = null;

        // Set basic get hero dialog
        this.bot.dialog('getHeroById', [
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

        this.bot.dialog('getHero', [
            (session) => {
                let heroCard = this.getHeroCard(this.data),
                    msg = new builder.Message(session).addAttachment(heroCard.cardAttachment);
                session.send(msg);
                session.endDialog();
            }
        ]);

        this.bot.dialog('notSureWhichHero', [
            (session) => {
                session.send("Hmmm... I am not really sure which Hero you are reffering to. Give it to me one more time?");
                session.endDialog();
            }
        ]);

        // TODO complete this when HeroConfirmationCard is available
        this.bot.dialog('confirmHero', [
            (session) => {
                session.send("Feature Unavailable: Confirm Hero");
                session.endDialog();
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

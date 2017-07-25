const builder = require('botbuilder'),
      HeroCard = require('../Cards/HeroCard/HeroCard');

class HeroDialog {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }

    addTo(bot) {
        const that = this;

        bot.dialog('getHeroDialog', [
            function (session, args) {
                const heroEntities = builder.EntityRecognizer.findAllEntities(args.intent.entities, 'Hero');

                if (heroEntities.length === 0) {
                    session.send('I don\'t know anything about that hero');
                    return;
                }

                if (heroEntities.length > 1) {
                    session.send('I can only tell you about one hero at a time.');
                    return;
                }

                const heroEntity = heroEntities[0];

                const resolutions = heroEntity.resolution.values;

                if (resolutions.length === 0) {
                    session.send('I was unable to resolve that hero');
                    return;
                }

                if (resolutions.length > 1) {
                    session.send('I\m not sure what hero you are talking about');
                    return;
                }

                const resolution = resolutions[0];

                const hero = that.heroRepository.getByCanonicalName(resolution),
                      heroCard = that.getHeroCard(hero);

                const msg = new builder.Message(session)
                    .addAttachment(heroCard.cardAttachment);

                session.send(msg);
                session.endDialog();
            }
        ]).triggerAction({
            matches: 'GetHero' 
        });

        bot.dialog('getHeroesByCharacteristicDialog', [
            function(session, args) {
                session.send('GetHeroesByCharacteristic ' + JSON.stringify(args));
                session.endDialog();
            }
        ]).triggerAction({
            matches: 'GetHeroesByCharacteristic'
        });

        bot.dialog('confirmHeroDialog', [
            function(session, args) {
                // TODO: Resolve hero if the user query returns multiple candidates
                session.endDialog();
            }
        ])
    }

    getHeroCard(hero) {
            return new HeroCard({
                steamName: hero.name,
                name: hero.localized_name,
                image: hero.img,
                attribute: hero.primary_attr,
                baseHealth: hero.base_health,
                baseMana: hero.base_mana,
                attackDamage: hero.base_attack_min, // TODO: attack is a range, not a single number
                movementSpeed: hero.move_speed,
                skills: hero.skills
            });
    }
}

module.exports = HeroDialog;

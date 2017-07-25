const builder = require('botbuilder');

class HeroDialog {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }

    addTo(bot) {
        bot.dialog('getSkillDialog', [
            function (session, args) {
                const skillEntities = builder.EntityRecognizer.findAllEntities(args.intent.entities, 'Skill');

                if (skillEntities.length === 0) {
                    session.send('I don\'t know anything about that skill');
                    return;
                }

                for (let skillEntity of skillEntities) {
                    const resolutions = skillEntity.resolution.values;

                    if (resolutions.length === 0) {
                        session.send('I was unable to resolve that skill');
                        return;
                    }

                    if (resolutions.length > 1) {
                        session.send(`I'm not sure what skill '${skillEntity.entity}' refers to`);
                        return;
                    }

                    const resolution = resolutions[0];

                    const hero = that.heroRepository.getByCanonicalName(resolution),
                        heroCard = that.getHeroCard(hero);

                    const msg = new builder.Message(session)
                        .addAttachment(heroCard.cardAttachment);

                    session.send(msg);
                }
                session.endDialog();
            }
        ]).triggerAction({
            matches: 'GetSkill' 
        });
    }
}

module.exports = HeroDialog;

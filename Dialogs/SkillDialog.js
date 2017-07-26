const builder = require('botbuilder'),
      SkillCard = require('../Cards/SkillCard/SkillCard');


class SkillDialog {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }

    addTo(bot) {
        const that = this;

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

                    const [hero, skill] = that.heroRepository.getBySkillName(resolution);
                    const skillCard = new SkillCard(skill);

                    const msg = new builder.Message(session)
                        .addAttachment(skillCard.cardAttachment);

                    session.send(msg);
                }
                session.endDialog();
            }
        ]).triggerAction({
            matches: 'GetSkill' 
        });
    }
}

module.exports = SkillDialog;

const builder = require('botbuilder');
const ScheduleCard = require('../Cards/ScheduleCard/ScheduleCard');
const MatchFactory = require('../Models/MatchFactory');

class ScheduleDialog {
    constructor() {
        this.matchFactory = new MatchFactory();
    }

    addTo(bot) {
        bot.dialog('getScheduleDialog', [
            (session) => {
                this.getScheduleCard().then(schedueCard => {
                    let msg = new builder.Message(session).addAttachment(schedueCard.cardAttachment);
                    session.send(msg);
                    session.endDialog();
                });
            }
        ]).triggerAction({
            matches: 'GetSchedule'
        });

        bot.dialog('getResultDialog', [
            function(session, args) {

            }
        ]).triggerAction({
            matches: 'GetResult'
        });
    }

    getScheduleCard() {
        return this.matchFactory.runFactory().then(data => {
            return new ScheduleCard(data);
        });
    }
}

module.exports = ScheduleDialog;

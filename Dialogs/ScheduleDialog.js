const builder = require('botbuilder');
const ScheduleCard = require('../Cards/ScheduleCard/ScheduleCard');
const MatchFactory = require('../Models/MatchFactory');

class ScheduleDialog {

    constructor(bot) {
        this.bot = bot;
        this.matchFactory = new MatchFactory();
        this.data = null;

        this.bot.dialog('getSchedule', [
            (session) => {
                this.getScheduleCard().then(schedueCard => {
                    let msg = new builder.Message(session).addAttachment(schedueCard.cardAttachment);
                    session.send(msg);
                    session.endDialog();
                });
            }
        ]);
    }

    getScheduleCard() {
        return this.matchFactory.runFactory().then(data => {
            return new ScheduleCard(data);
        });
    }
}

module.exports = ScheduleDialog;

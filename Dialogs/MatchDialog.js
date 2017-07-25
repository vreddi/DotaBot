const builder = require('botbuilder');

class MatchDialog {
    constructor() {
    }

    addTo(bot) {
        bot.dialog('getScheduleDialog', [
            function(session, args) {
                session.send('GetSchedule ' + JSON.stringify(args));
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
}

module.exports = MatchDialog;

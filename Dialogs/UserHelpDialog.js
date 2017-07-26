const builder = require('botbuilder');

class UserHelpDialog {

    addTo(bot) {
        const that = this;

        bot.dialog('getHelp', [
            function (session, args) {
                session.send("I can tell you about heros in the game. Try something like: \n\n \"Tell me about Antimage\"");
                session.send("I can tell you about hero skills. Try something like: \n\n \"Show Schedule\"");
                session.send("Into the proffessional scene? I can show you the upcoming schedule: \n\n \"Give information about Chain Frost\"");
                session.send("I am learning about 'Items', 'Hero Talents', 'Strats and tips' among many other things.\n Soon I would be able to help you with more information.");
                session.endDialog();
            }
        ]);
    }
}
module.exports = UserHelpDialog;

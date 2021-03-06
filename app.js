const dotenv = require('dotenv');
const restify = require('restify');
const builder = require('botbuilder');
const HeroRepository = require('./Models/HeroRepository');
const HeroDialog = require('./Dialogs/HeroDialog');
const ScheduleDialog = require('./Dialogs/ScheduleDialog');
const SkillDialog = require('./Dialogs/SkillDialog');
const UserHelpDialog = require('./Dialogs/UserHelpDialog');

// Configure environment variables
dotenv.config();

const heroRepository = new HeroRepository('./Metadata/Heroes');

// Setup Restify Server
const server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('%s listening to %s', server.name, server.url);
});

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector, (session) => {

    session.replaceDialog('getHelp');
});

const luis_endpoint = 'https://westus.api.cognitive.microsoft.com/luis/v2.0',
      luis_app_id = process.env.LUIS_APP_ID,
      luis_app_key = process.env.LUIS_SUBSCRIPTION_KEY;

bot.recognizer(new builder.LuisRecognizer(`${luis_endpoint}/apps/${luis_app_id}?subscription-key=${luis_app_key}`));

new UserHelpDialog().addTo(bot);
new HeroDialog(heroRepository).addTo(bot);
new SkillDialog(heroRepository).addTo(bot);
new ScheduleDialog().addTo(bot);

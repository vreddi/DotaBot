const dotenv = require('dotenv');
const restify = require('restify');
const builder = require('botbuilder');
const MatchResultCard = require('./Cards/MatchResultCard/MatchResultCard');
const TI7Teams = require('./Metadata/TI7Teams');
const Utils = require('./Shared/Utils');
const HeroDialog = require('./Dialogs/HeroDialog');
const Interpreter = require('./Controller/Interpreter');

// Configure environment variables
dotenv.config();

// Setup Restify Server
const server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

function createHeroCard(hero, session) {
    return new builder.HeroCard(session)
        .title(hero.name)
        .subtitle(hero.primaryAttr + ' Hero')
        .text("Base Health: " + hero.baseHealth + "\n\nBase Mana: " + hero.baseMana + "\n\nBaseDamage: " + hero.baseDamage)
        .images([
            builder.CardImage.create(session, hero.image)
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://docs.microsoft.com/bot-framework/', 'Get Started')
        ]);
}

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
const bot = new builder.UniversalBot(connector, (session) => {
    let query = session.message.text,
        randomIndex = Utils.randomIntFromInterval(0, TI7Teams.length - 1);
        team1 = TI7Teams[randomIndex];
        team2 = TI7Teams[Utils.randomIntFromInterval(0, TI7Teams.length - 1, [randomIndex])];
        matchResultCard = new MatchResultCard({
            team1ImageUrl: team1.teamLogo,
            team2ImageUrl: team2.teamLogo,
            team1Name: team1.teamName,
            team2Name: team2.teamName,
            team1Score: 2,
            team2Score: 0
        });

    interpreter.session = session;

    interpreter.queryLuis(query).then(() => {
        interpreter.handleIntent();
    }, (error) => {
        throw error;
    });
});

const interpreter = new Interpreter(bot);

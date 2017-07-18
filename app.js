const restify = require('restify');
const builder = require('botbuilder');
const axios = require('axios');
const HeroFactory = require('./Models/HeroFactory');
const MatchResultCard = require('./Cards/MatchResultCard/MatchResultCard');
const TI7Teams = require('./Metadata/TI7Teams');
const Utils = require('./Shared/Utils');

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

const heroFactory = new HeroFactory();

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

// Receive messages from the suer and respond by echoing each message back (prefixed with 'You said:')
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

    var msg = new builder.Message(session).addAttachment(matchResultCard.cardAttachment);
    session.send(msg);

    // if(heroFactory.heros.length == 0) {
    //     heroFactory.getHeros().then(() => {
    //         session.send("Whoopsies...Try again.");
    //     });
    // }
    // else {
    //     heroFactory.getHeros().then(() => {
    //         var msg = new builder.Message(session).addAttachment(createHeroCard(heroFactory.heros[parseInt(session.message.text)], session));
    //         session.send(msg);
    //     });
    // }
});

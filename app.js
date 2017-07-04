const restify = require('restify');
const builder = require('botbuilder');
const axios = require('axios');
const HeroFactory = require('./Models/HeroFactory');

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
        .images([
            builder.CardImage.create(session, hero.image)
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://docs.microsoft.com/bot-framework/', 'Get Started')
        ]);
}

// Receive messages from the suer and respond by echoing each message back (prefixed with 'You said:')
const bot = new builder.UniversalBot(connector, (session) => {

    if(heroFactory.heros.length == 0) {
        heroFactory.getHeros().then(() => {
            session.send("Whoopsies...Try again.");
        });
    }
    else {
        heroFactory.getHeros().then(() => {
            var msg = new builder.Message(session).addAttachment(createHeroCard(heroFactory.heros[parseInt(session.message.text)], session));
            session.send(msg);
        });
    }
});

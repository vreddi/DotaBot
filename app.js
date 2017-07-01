const restify = require('restify');
const builder = require('botbuilder');

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

// Receive messages from the suer and respond by echoing each message back (prefixed with 'You said:')
const bot = new builder.UniversalBot(connector, (session) => {
    session.send('You said: %s', session.message.text);
});

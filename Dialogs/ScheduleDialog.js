const builder = require('botbuilder');
const ScheduleCard = require('../Cards/ScheduleCard/ScheduleCard');
const MatchFactory = require('../Models/MatchFactory');
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');

const GosuBaseUrl = "http://www.gosugamers.net";

class ScheduleDialog {
    constructor() {
        this.matchFactory = new MatchFactory();
    }


    addTo(bot) {
        session.send("I'm fetching match information. It might take me a few seconds, so thanks for waiting.")

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

            let promises = [],
                matchesToShow = [];

            for(let index = 0; index < 3; ++index) {
                let homeTeamUrl = GosuBaseUrl + data[index].home.url,
                    awayTeamUrl = GosuBaseUrl + data[index].away.url;

                matchesToShow.push(data[index]);

                // Get team logo for home team
                promises.push(rp(homeTeamUrl).then((html) => {
                    var $ = cheerio.load(html);
                    data[index].home.image = GosuBaseUrl + $('div.teamImage')[0]['attribs']['style'].split("'")[1];
                }).catch(error => {
                    console.log(error);
                }));

                // Get team logo for away team
                promises.push(rp(awayTeamUrl).then((html) => {
                    var $ = cheerio.load(html);
                    data[index].away.image = GosuBaseUrl + $('div.teamImage')[0]['attribs']['style'].split("'")[1];
                }).catch(error => {
                    console.log(error);
                }));
            }

            return Promise.all(promises).then(() => {
                return new ScheduleCard(matchesToShow);
            });
        });
    }
}

module.exports = ScheduleDialog;

const axios = require('axios');
const Gosu = require('gosugamers-api');
const Match = require('./Match');
const request = require('request');
const cheerio = require('cheerio');

const GosuBaseUrl = "http://www.gosugamers.net";

class MatchFactory {

    contructor() {
        this.matches = [];
    }

    /**
     * Initializes the match factory by populating the match cache with
     * recent upcoming matches
     * @return Promise<Match[]> :: A promise wrapping a list of upcoming matches
     */
    runFactory() {

        return new Promise((resolve, reject) => {
            Gosu.fetchMatchUrls('dota2', 3, (err, urls) => {
            	if (err) {
                    reject("Getting match data failed. Error: " + err);
                }
            	else {
            		// Parse them all and return an array of objects
            		Gosu.parseMatches(urls, function(err, results){
                        if(err) {
                            reject("Getting match data failed. Error: " + err);
                        }
                        else {
                            let matches = [];
                            for(let result of results) {
                                if(result !== undefined) {
                                    matches.push(new Match({
                                        home: result.home,
                                        away: result.away,
                                        datetime: result.datetime,
                                        rounds: result.rounds,
                                        status: result.status,
                                        valueBet: result.valueBet,
                                        url: result.url,
                                        type: result.type
                                    }));
                                }
                            }


                            resolve(matches);
                        }
            		});
    	       }
            });
        });
    }
}


module.exports = MatchFactory;

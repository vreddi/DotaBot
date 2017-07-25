const axios = require('axios');
const Gosu = require('gosugamers-api');
const Match = require('./Match');

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
                            let matches = results.filter((result) => result !== undefined);
                            resolve(matches);
                        }
            		});
    	       }
            });
        });
    }
}


module.exports = MatchFactory;

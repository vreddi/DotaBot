const axios = require('axios');

class LuisAdapter {

    constructor(options) {
        this.appId = options.appId;
        this.subscriptionKey = options.subscriptionKey;
        this.baseUrl = options.endpoint || "https://westus.api.cognitive.microsoft.com/luis/";
        this.verbose = options.verbose || true;
        this.timezoneOffset = options.timezoneOffset || 0;
        this.version = options.version || "v2.0";
        this.data = null;
    }

    /**
     * Queries LUIS endpoint with the previously set parameters.
     * @param  String :: User query string that needs to be interpreted by LUIS
     * @return Promise<Object> :: Get promise on LUIS
     */
    query(query) {
        let apiEndpoint = this.baseUrl + `${ this.version }/apps/${ this.appId }?subscription-key=${ this.subscriptionKey }&timezoneOffset=${ this.timezoneOffset }&verbose=${ this.verbose }&q=${ query }`;

        return axios.get(apiEndpoint).then((response) => {
            this.data = response["data"];
            return this.data;
        }, (error) => {
            throw error;
        })
    }

    /**
     * Provides the top scoring intent name provided by LUIS
     * @return String :: Top scoring intent name
     */
    getTopScoringIntent() {
        return this.data.topScoringIntent.intent;
    }

    /**
     * Provides the top scoring intent object provided by LUIS
     * @return Object :: Top scoring intent with its score
     */
    getTopScoringIntentObject() {
        return this.data.topScoringIntent;
    }

    /**
     * Provides list of selected intents by LUIS
     * @return [Object] :: List of selected intents
     */
    getIntents() {
        return this.data.intents;
    }

    /**
     * Provides list of selected entities by LUIS
     * @return [Object] :: List of selected entites
     */
    getEntities() {
        return this.data.entities;
    }
}

module.exports = LuisAdapter;

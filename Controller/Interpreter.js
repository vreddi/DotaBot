const LuisAdapter = require('./LuisAdapter');
const Exception = require('../Shared/Exception');
const HeroFactory = require('../Models/HeroFactory');
const HeroIdMetadata = require('../Metadata/HeroIdMetadata');

// Dialogs
const HeroDialog = require('../Dialogs/HeroDialog');

class Interpreter {

    constructor(bot, session, options = {}) {
        this.bot = bot;
        this.session = session;
        this.heroFactory = options.heroFactory || new HeroFactory();
        this.heroFactory.getHeros()
        this.luisAdapter = new LuisAdapter({
            appId: process.env.LUIS_APP_ID,
            subscriptionKey: process.env.LUIS_SUBSCRIPTION_KEY
        });

        this.heroDialog = new HeroDialog(bot);
        this.heroDialog.heroFactory = this.heroFactory;
    }

    /**
     * Queries LUIS with the provided user query
     * @param  String :: User query
     * @return Promise<Object> :: Promise containing the response from LUIS
     */
    queryLuis(query) {
        return this.luisAdapter.query(query).then((data) => {
            return data;
        }, (error) => {
            throw error;
        });
    }

    /**
     * Handles different Intents provided through LUIS by taking the correct
     * action.
     */
    handleIntent() {
        let topScoringIntent;

        if(this.luisAdapter.data === undefined) {
            throw Exception.NullReferenceException("LUIS has not been queried yet to retrieve intents.");
        }

        topScoringIntent = this.luisAdapter.getTopScoringIntentObject();

        switch(topScoringIntent.intent) {
            case "GetHero":
                this.handleGetHeroIntent(topScoringIntent);
                break;

            default:
                // TODO: Did not understand dialog
                break;
        }
    }

    /**
     * Determines if LUIS is confident in its result or not
     * @param  Number :: Score of the intent produced by LUIS
     * @return Boolean :: Determination of whether LUIS is confident or not
     */
    isConfident(score) {
        return score > 0.60;
    }

    /**
     * Handles the GetHero Intent from LUIS by performing relevant actions
     * @param  Object :: The top scoring Intent provided by LUIS
     */
    handleGetHeroIntent(topScoringIntent) {
        if(this.isConfident(topScoringIntent.score)) {
            let entities = this.luisAdapter.getEntities();

            // Single Entity
            if(entities) {
                switch(entities.length) {
                    case 0:
                        this.session.beginDialog('notSureWhichHero');
                        break;

                    case 1:
                        if(entities[0].resolution.values.length === 1) {
                            this.heroDialog.data = HeroIdMetadata[entities[0].resolution.values[0]];
                            this.session.beginDialog('getHero');
                        }
                        else {
                            this.heroDialog.data = entities[0].resolution.values.map(value => {
                                return HeroIdMetadata[value];
                            });
                            this.session.beginDialog('confirmHero');
                        }
                        break;

                    // More than 1 entity
                    default:
                        this.heroDialog.data = entities.map((entity) => {
                            if(entity.resolution.values.length === 1) {
                                return HeroIdMetadata[entity.resolution.values[0]]
                            }
                            else {
                                return entity.resolution.values.map(value => {
                                    return HeroIdMetadata[value];
                                });
                            }
                        });

                        this.session.beginDialog('confirmHero');
                        break;
                }
            }
            else {
                this.session.beginDialog('notSureWhichHero');
            }

        }
        else {
            // TODO change dialog to correct dialog. In this case the bot is not
            //      confident in its abilities.
            this.session.beginDialog('notSureWhichHero');
        }
    }
}

module.exports = Interpreter;

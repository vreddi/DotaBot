class Match {

    constructor(data) {
        this.home = data.home;
        this.away = data.away;
        this.datetime = data.datetime;
        this.rounds = data.rounds;
        this.status = data.status;
        this.type = data.type;
        this.valueBet = data.valueBet;
        this.url = data.url;
    }
}

module.exports = Match;

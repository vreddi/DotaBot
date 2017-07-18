let MatchResultCardAttachment = require("./MatchResultCardAttachment");

class MatchResultCard {

    constructor(matchResultData) {
        // Team 1
        this.team1Name = matchResultData.team1Name;
        this.team1ImageUrl = matchResultData.team1ImageUrl;
        this.team1Score = matchResultData.team1Score;

        // Team 2
        this.team2Name = matchResultData.team2Name;
        this.team2ImageUrl = matchResultData.team2ImageUrl;
        this.team2Score = matchResultData.team2Score;

        this.cardAttachment = MatchResultCardAttachment;

        // Set team logos
        this.cardAttachment["content"]["body"][0]["columns"][0]["items"][0]["url"] = this.team1ImageUrl;
        this.cardAttachment["content"]["body"][0]["columns"][1]["items"][0]["url"] = this.team2ImageUrl;

        // Set team names
        this.cardAttachment["content"]["body"][1]["columns"][0]["items"][0]["text"] = "**" + this.team1Name + "**";
        this.cardAttachment["content"]["body"][1]["columns"][2]["items"][0]["text"] = "**" + this.team2Name + "**";

        // Set team scores
        this.cardAttachment["content"]["body"][2]["columns"][0]["items"][0]["text"] = "**" + this.team1Score + "**";
        this.cardAttachment["content"]["body"][2]["columns"][1]["items"][0]["text"] = "**" + this.team2Score + "**";
    }
}

module.exports = MatchResultCard;

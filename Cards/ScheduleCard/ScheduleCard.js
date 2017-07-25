let ScheduleCardAttachment = require('./ScheduleCardAttachment');

class ScheduleCard {

    constructor(scheduleData) {
        this.homeTeams = [];
        this.awayTeams = [];

        this.cardAttachment = ScheduleCardAttachment;

        for(let match of scheduleData) {

            this.homeTeams.push(match.home);
            this.awayTeams.push(match.away);

            // Add ColumnSet 1
            this.cardAttachment['content']['body'].push({
                "type": "ColumnSet",
                "separation": "strong",
                "columns": [
                    {
                        "type": "Column",
                        "size": 1,
                        "items": [
                            {
                                "type": "TextBlock",
                                "weight": "bolder",
                                "text": match.home.name,
                                "isSubtle": true
                            },
                            {
                                "type": "Image",
                                "size": "small",
                                "url": match.home.image ||"https://image.ibb.co/mMbAFQ/radiant_dota_logo.png"
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "size": "auto",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": "&nbsp;"
                            },
                            {
                                "type": "Image",
                                "url": "https://vignette4.wikia.nocookie.net/deathbattlefanon/images/4/47/VS.png/revision/latest?cb=20150710201544",
                                "size": "small"
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "size": 1,
                        "items": [
                            {
                                "type": "TextBlock",
                                "weight": "bolder",
                                "horizontalAlignment": "right",
                                "text": match.away.name,
                                "isSubtle": true
                            },
                            {
                                "type": "Image",
                                "horizontalAlignment": "right",
                                "size": "small",
                                "url": match.away.image || "https://image.ibb.co/fSCT25/dire_dota_logo.png"
                            }
                        ]
                    }
                ]
            });

            // Add score of the match if needed
            // TODO

            // Add ColumnSet 2
            this.cardAttachment['content']['body'].push({
                "type": "ColumnSet",
                "columns": [
                    {
                        "type": "Column",
                        "size": 1,
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": (new Date(match.datetime * 1000)).toLocaleString(),
                                "horizontalAlignment": "center"
                            }
                        ]
                    }
                ]
            });
        }
    }
}

module.exports = ScheduleCard;

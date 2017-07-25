let ScheduleCardAttachment = require('./ScheduleCardAttachment');

class ScheduleCard {

    constructor(scheduleData) {
        this.homeTeams = [];
        this.awayTeams = [];

        this.cardAttachment = ScheduleCardAttachment;
        let index = 0;

        for(let match of scheduleData) {

            index++;
            if(index > 5) {
                return;
            }
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
                                "text": match.home.name,
                                "isSubtle": true
                            },
                            {
                                "type": "Image",
                                "size": "small",
                                "url": "http://wiki.teamliquid.net/commons/images/thumb/0/07/Team_liquid_logo_2017.png/600px-Team_liquid_logo_2017.png"
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
                                "horizontalAlignment": "right",
                                "text": match.away.name,
                                "isSubtle": true
                            },
                            {
                                "type": "Image",
                                "horizontalAlignment": "right",
                                "size": "small",
                                "url": "https://hydra-media.cursecdn.com/lol.gamepedia.com/thumb/e/ed/Cloud9x.png/300px-Cloud9x.png?version=af26da01f3d1718df00646d5d301606d"
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
                                "text": match.datetime.toString(),
                                "horizontalAlignment": "center",
                                "weight": "bolder"
                            }
                        ]
                    }
                ]
            });
        }
    }
}

module.exports = ScheduleCard;

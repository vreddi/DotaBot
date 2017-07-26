let MatchResultCardAttachment = {
    contentType: "application/vnd.microsoft.card.adaptive",
    content: {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "body": [{
            "type": "ColumnSet",
            "columns": [{
                "type": "Column",
                "items": [{
                    "type": "TextBlock",
                    "text": "",
                    "color": "attention",
                    "size": "large",
                    "speak": "",
                    "wrap": true
                },
                    {
                        "type": "TextBlock",
                        "text": "",
                        "speak": "",
                        "wrap": true
                    },
                    {
                        "type": "FactSet",
                        "speak": "",
                        "facts": [{
                            "title": "Cooldown:",
                            "value": ""
                        },
                            {
                                "title": "Mana Cost:",
                                "value": ""
                            }
                        ]
                    }
                ]
            },
                {
                    "type": "Column",
                    "horizontalAlignment": "right",
                    "items": [{
                        "type": "Image",
                        "size": "large",
                        "url": ""
                    }]
                }
            ]
        },
            {
                "type": "Container",
                "separation": "strong",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "",
                        "separation": "none",
                        "color": "good",
                        "speak": "",
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "separation": "none",
                        "color": "good",
                        "text": "",
                        "speak": "",
                        "wrap": true
                    },
                    {
                        "type": "TextBlock",
                        "separation": "none",
                        "color": "good",
                        "text": "",
                        "speak": "",
                        "wrap": true
                    },
                    {
                        "type": "FactSet",
                        "speak": "",
                        "facts": [{
                            "title": "",
                            "value": ""
                        },
                            {
                                "title": "",
                                "value": ""
                            },
                            {
                                "title": "",
                                "value": ""
                            },
                            {
                                "title": "",
                                "value": ""
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

module.exports = MatchResultCardAttachment;

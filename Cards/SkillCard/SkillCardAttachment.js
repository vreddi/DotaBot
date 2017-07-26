let SkillCardAttachment = {
    contentType: "application/vnd.microsoft.card.adaptive",
    content: {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "body": [{
            "type": "ColumnSet",
            "size": "13",
            "columns": [{
                "type": "Column",
                "items": [{
                    "type": "TextBlock",
                    "text": "",
                    "color": "warning",
                    "size": "extraLarge",
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
                    "size": "10",
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
                       "type": "FactSet",
                       "speak": "",
                       "facts": []
                   }
                ]
            }
        ]
    }
};

module.exports = SkillCardAttachment;

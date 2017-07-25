let MatchResultCardAttachment = {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
        	"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        	"type": "AdaptiveCard",
        	"body": [
        		{
        			"type": "Container",
        			"speak": "<s></s>",
        			"items": [
        				{
        					"type": "ColumnSet",
        					"columns": [
        						{
        							"type": "Column",
        							"size": "auto",
        							"items": [
        								{
        									"type": "Image",
        									"url": "",
        									"size": "large"
        								}
        							]
        						},
        						{
        							"type": "Column",
        							"size": "stretch",
        							"items": [
        								{
        									"type": "TextBlock",
        									"text": "",
        									"wrap": true,
        									"horizontalAlignment": "center"
        								},

        								{
        									"type": "TextBlock",
        									"separation": "none",
        									"text": "",
        									"color": "",
        									"wrap": true,
        									"horizontalAlignment": "center"
        								}
        							]
        						}
        					]
        				}
        			]
        		},
	            {
	                "type": "ColumnSet",
	                "columns": [{
	                        "type": "Column",
	                        "size": "stretch",
	                        "items": [{
	                            "type": "Container",
	                            "separation": "strong",
	                            "items": [{
	                                "type": "FactSet",
	                                "speak": "",
	                                "facts": [{
	                                        "title": "Base Health:",
	                                        "value": ""
	                                    },
	                                    {
	                                        "title": "Base Mana:",
	                                        "value": ""
	                                    },
	                                    {
	                                        "title": "Attack Damage:",
	                                        "value": ""
	                                    },
	                                    {
	                                        "title": "Movement Speed:",
	                                        "value": ""
	                                    }
	                                ]
	                            }]
	                        }],
	                        "selectAction": {
	                            "type": "Action.OpenUrl",
	                            "url": null
	                        }
	                    },
	                    {
	                        "type": "Column",
	                        "size": "stretch",
	                        "items": [{
	                            "type": "Container",
	                            "separation": "strong",
	                            "items": [{
	                                "type": "FactSet",
	                                "speak": "",
	                                "facts": [{
	                                        "title": "Str:",
	                                        "value": ""
	                                    },
	                                    {
	                                        "title": "Agi:",
	                                        "value": ""
	                                    },
	                                    {
	                                        "title": "Int:",
	                                        "value": ""
	                                    }
	                                ]
	                            }]
	                        }],
	                        "selectAction": {
	                            "type": "Action.OpenUrl",
	                            "url": null
	                        }
	                    }
	                ]
	            },
        		{
        			"type": "ColumnSet",
        			"columns": [
        			]
        		}
        	]
        }
    };

module.exports = MatchResultCardAttachment;

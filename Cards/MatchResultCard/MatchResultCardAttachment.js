let MatchResultCardAttachment = {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
        	"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        	"type": "AdaptiveCard",
        	"version": "0.5",
        	"speak": "<s></s>",
        	"body": [
        		{
        			"type": "ColumnSet",
        			"columns": [
        				{
        					"type": "Column",
        					"size": "35",
        					"items": [
        						{
        							"type": "Image",
        							"url": "",
        							"size": "medium",
        							"horizontalAlignment": "left"
        						}
        					]
        				},
        				{
        					"type": "Column",
        					"size": "35",
        					"items": [
        						{
        							"type": "Image",
        							"url": "",
        							"size": "medium",
        							"horizontalAlignment": "right"
        						}
        					]
        				}
        			]
        		},
        		{
        			"type": "ColumnSet",
        			"columns": [
        				{
        					"type": "Column",
        					"size": "35",
        					"items": [
        						{
        							"type": "TextBlock",
        							"text": "",
        							"size": "large",
        							"color": "dark",
        							"horizontalAlignment": "center"
        						}
        					]
        				},
        				{
        					"type": "Column",
        					"size": "65",
        					"items": [
        						{
        							"type": "TextBlock",
        							"text": "vs",
        							"size": "extraLarge",
        							"color": "dark",
        							"horizontalAlignment": "center"
        						}
        					]
        				},
        				{
        					"type": "Column",
        					"size": "35",
        					"items": [
        						{
        							"type": "TextBlock",
        							"text": "",
        							"size": "large",
        							"color": "dark",
        							"horizontalAlignment": "center"
        						}
        					]
        				}
        			]
        		},
        		{
        			"type": "ColumnSet",
        			"separation": "strong",
        			"columns": [
        				{
        					"type": "Column",
        					"size": "35",
        					"items": [
        						{
        							"type": "TextBlock",
        							"text": "",
        							"size": "large",
        							"color": "dark",
        							"horizontalAlignment": "center"
        						}
        					]
        				},
        				{
        					"type": "Column",
        					"size": "35",
        					"items": [
        						{
        							"type": "TextBlock",
        							"text": "",
        							"size": "large",
        							"color": "dark",
        							"horizontalAlignment": "center"
        						}
        					]
        				}
        			]
        		}
        	]
        }
    };

module.exports = MatchResultCardAttachment;

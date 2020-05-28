"use strict";


var htmlBlocks =
[{
  "type": "document_ready",
  "message0": "when document is ready %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statement"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "_bind__",
  "message0": "attach handler to event %1 to %2 do %3",
  "args0": [
    {
      "type": "input_value",
      "name": "bid",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "_blur__",
  "message0": "when lost focus %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "_change__",
  "message0": "on value change %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
}];

if (Msg && Msg.blocks) {
  // Update jsons with translations
  for (var iBlock in htmlBlocks) {
    var json = htmlBlocks[iBlock];
    var trs = Msg.blocks[json.type];
    for (var iTr in trs) {
      if (typeof(trs[iTr]) == "string") {
        json[iTr] = trs[iTr];
      } else if (typeof(trs[iTr]) == "object") {
        // Mainly for args0 property
        // Follow two levels, then just replace
        for (var iTrObj in trs[iTr]) {
          if (typeof(trs[iTr][iTrObj]) == "object") {
            for (var index in trs[iTr][iTrObj]) {
              json[iTr][iTrObj][index] = trs[iTr][iTrObj][index];
            }
          }
          else {
            console.error("Don't know how to translate that: Msg.blocks." + iTr + "." + iTrObj)
          }
        }
      } else {
        console.error("Don't know how to translate that: Msg.blocks." + iTr)
      }
    }
  }
}

for (var iBlock in htmlBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(htmlBlocks[iBlock]);
}

"use strict";

var chapter3 = require("./chapter3/pattern");

var info = {
    number: '10',
    origin: '0xgi',
    destination: 'The big bang theory'
};
var theory = chapter3(info);
console.log(theory.getInformation());


//


var info2 = {
    actualDepart: Date.now()
};
var theory2 = chapter3(info2);
console.log(theory2.getInformation());
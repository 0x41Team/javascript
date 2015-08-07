"use strict";

var fly = require('./fly');

fly.setNumber(10);
fly.setOrigin('The big bang theory');
fly.setDestination('0xgi');

console.log(fly.getInfo());
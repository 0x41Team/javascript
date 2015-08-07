"use strict";

var fly = require('./chapter2');
// chapter2 is folder name, you can access to fly.js because package.json configuration "main".
// If you change name file from main in package.json file, you can't access to fly.js

//Todo 'You using method above for publish module with npm, that important'

fly.setNumber(10);
fly.setOrigin('The big bang theory');
fly.setDestination('0xgi');

console.log(fly.getInfo());
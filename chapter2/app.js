"use strict";

var fly = require('./fly');

fly.setNumber(10);
fly.setOrigin('The big bang theory');
fly.setDestination('0xgi');

console.log(fly.getInfo());


// problem, if you declare otherFly using require('./fly') and call function getInfo(),
// you already get data from above 'fly' :(

var otherFly = require('./fly');

console.log(otherFly.getInfo());

//
//{ number: 10,
//    origin: 'The big bang theory',
//    destination: '0xgi' }

//{ number: 10,
//    origin: 'The big bang theory',
//    destination: '0xgi' }

//Fixme: Ohh dead :( Solve problem from next chapter
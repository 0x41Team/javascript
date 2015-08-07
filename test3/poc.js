"use strict";

var theory = function (message) {
    console.log("Theory: " + message);
};

exports.big = theory;

exports.strong = function (message) {
    console.log("Strong: " + message);
};
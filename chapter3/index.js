"use strict";

module.exports = function (info) {
    var values = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        actualDepart: null
    };

    for (var prop in values){
        if(values[prop] !== 'undefined') {
            values[prop] = info[prop];
        }
    }

    var functions = {
        triggerDepart: function() {
            values.actualDepart = Date.now();
        },
        getInformation: function() {
            return values;
        }
    };

    return functions;
};

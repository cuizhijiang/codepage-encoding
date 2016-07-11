'use strict';
var all = require('./codepages.json');

exports.to = function (name) {
    for (var key in all) {
        if (all[key]==name) {
            return key;
        }
    }
};

exports.from = function (pageCode) {
	return all[pageCode];
};

exports.all = all;
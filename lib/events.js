var request = require('request');
var querystring = require('querystring');
var client = require('./api-client');

var URL_BASE = 'https://ridb.recreation.gov/api/v1/events';

// retrieves all events. 
exports.getAll = function(params, callback) {
    url = URL_BASE + '/?' + querystring.stringify(params);
	client.makeApiCall(url, params, callback);
};

// retrieves a specific event item.
exports.getSpecific = function(eventID, callback) {
    url = URL_BASE + '/' + eventID;
	client.makeApiCall(url, null, callback);
};
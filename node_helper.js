/* Magic Mirror
 * Module: MMM-WeatherBackground
 * node helper By Cowboysdude 
 */
var NodeHelper = require("node_helper");
const request = require('request');
var lat, lon;

module.exports = NodeHelper.create({

    start: function() {
        console.log("Node Helper for MyBackGround started");
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "GET_INFO") {
            this.getLatLon();
        }
    },

    getLatLon: function() {
        request({
            url: "https://ipapi.co/json",
            method: 'GET'
        }, (error, response, body) => {
            var info = JSON.parse(body);
            lat = info.latitude;
            lon = info.longitude;
            this.getSRSS();
        });
    },

    getSRSS: function() {
        request({
            url: "http://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&formatted=0",
            method: 'GET'
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var result = JSON.parse(body);
                this.sendSocketNotification("SRSS_RESULTS", result); 
            }
        });
    }
});
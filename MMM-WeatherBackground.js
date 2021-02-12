//
// MMM-WeatherBackground
//  Modified by Cowboysdude for MMM-NOAA3

var sunset;
var icon;
"use strict";

Module.register("MMM-WeatherBackground", {
  
    defaults: {
        targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, currentweather will be targeted.)
        notification: "WEATHER", //if you use other weather module, modify this.
        opacity: '0.3',
        payloadConverter: (payload) => {  
             icon = payload.icon,
             sunset = moment(payload.sunset).format('HH'),  
             now = moment().format('HH'),
		console.log("Now time :"+now+" Sunset :"+sunset);
			if (now >= sunset) {
                var iconMap = {
		    "breezy": "modules/MMM-WeatherBackground/images/n_bao.jpg",
		    "broken clouds":"modules/MMM-WeatherBackground/images/n_brokenclouds.jpg",
                    "clear": "modules/MMM-WeatherBackground/images/n_clear.jpg",
                    "sleet": "modules/MMM-WeatherBackground/images/n_sleet.jpg",
                    "mostlycloudy": "modules/MMM-WeatherBackground/images/n_mostlycloudy.jpg",
                    "partlycloudy": "modules/MMM-WeatherBackground/images/n_partlycloudy.jpg",
                    "cloudy": "modules/MMM-WeatherBackground/images/n_cloudy.jpg",
                    "rain": "modules/MMM-WeatherBackground/images/n_rain.jpg",
                    "drizzle": "modules/MMM-WeatherBackground/images/n_drizzle.jpg",
                    "tstorms": "modules/MMM-WeatherBackground/images/n_tstorms.jpg",
                    "snow": "modules/MMM-WeatherBackground/images/n_snow.jpg",
                    "windy": "modules/MMM-WeatherBackground/images/n_windy.jpg",
                    "fog": "modules/MMM-WeatherBackground/images/n_fog.jpg",
                    "overcast": "modules/MMM-WeatherBackground/images/n_overcast.jpg",
                    "hazy": "modules/MMM-WeatherBackground/images/n_hazy.jpg",
                    "Clouds":"modules/MMM-WeatherBackground/images/n_cloudy.jpg",
                    "Light Rain": "modules/MMM-WeatherBackground/images/n_lightrain.jpg",
                    "Breezy and Mostly Cloudy": "modules/MMM-WeatherBackground/images/n_partlycloudy.jpg",
                    "chancesnow": "modules/MMM-WeatherBackground/images/n_lightsnow.jpg",					
                }
                return iconMap[icon]

            } else {

                var iconMap = {
		    "breezy": "modules/MMM-WeatherBackground/images/bao.jpg",
		    "brokenclouds":"modules/MMM-WeatherBackground/images/brokenclouds.jpg",
                    "sunny": "modules/MMM-WeatherBackground/images/clear.jpg",
                    "clear": "modules/MMM-WeatherBackground/images/clear.jpg",
                    "cloudy": "modules/MMM-WeatherBackground/images/cloudy.jpg",
                    "mostlycloudy": "modules/MMM-WeatherBackground/images/mostlycloudy.jpg",
                    "partlycloudy": "modules/MMM-WeatherBackground/images/partlycloudy.jpg",
                    "overcast": "modules/MMM-WeatherBackground/images/overcast.jpg",
                    "wind": "modules/MMM-WeatherBackground/images/windy.jpg",
                    "rain": "modules/MMM-WeatherBackground/images/rain.jpg",
                    "tstorms": "modules/MMM-WeatherBackground/images/tstorms.jpg",
                    "snow": "modules/MMM-WeatherBackground/images/snow.jpg",
                    "fog": "modules/MMM-WeatherBackground/images/fog.jpg",
                    "sleet": "modules/MMM-WeatherBackground/images/sleet.jpg", 
                    "hazy": "modules/MMM-WeatherBackground/images/hazy.jpg",
                    "drizzle": "modules/MMM-WeatherBackground/images/drizzle.jpg",
					"Light Rain": "modules/MMM-WeatherBackground/images/lightrain.jpg",
					"Breezy and Mostly Cloudy": "modules/MMM-WeatherBackground/images/partlycloudy.jpg",
					"chancesnow": "modules/MMM-WeatherBackground/images/lightsnow.jpg",	
                }		
                return iconMap[icon]
            }
        },
    },

    Css: function() {
        var myElement = document.getElementsByClassName('module');
        var i;
        for (i = 0; i < myElement.length; i++) {
            myElement[i].style.backgroundColor = "rgba(0,0,0," + this.config.opacity + ")";
            myElement[i].style.padding = "10px 10px 10px 10px";
        }
    },

    notificationReceived: function(noti, payload, sender) {
        switch (noti) {
            case "DOM_OBJECTS_CREATED":
                break
            case this.config.notification:  
                var target = (this.config.targetDOM) ? this.config.targetDOM : "#" + sender.data.identifier 
                var t = this.config.payloadConverter(payload)
                this.loadImage(target, t)
                this.Css() 
                break
        }
    },

    loadImage: function(target, description) {
        var drawImage = function(dom) {
            var timer = setTimeout(() => {
                var url = description
                dom.style.backgroundSize = "cover"
                dom.style.transition = "background-image 2s ease 2s"
                var url = `url('${url}')` 
                dom.style.backgroundImage = url 
            }, 1000)
        }
        var doms = document.querySelectorAll(target)
        if (doms.length <= 0) {
            console.log("[NOAA3_WTHBGR] DOM not found.", target)
            return;
        }
        doms.forEach((dom) => {
            drawImage(dom)
        })
    }
})

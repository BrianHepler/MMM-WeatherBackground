//
// MMM-WeatherBackground
//  Modified by Cowboysdude for MMM-NOAA3
var sunset;

Module.register("MMM-WeatherBackground", {

    socketNotificationReceived: function(notification, payload) {
        if (notification === "SRSS_RESULTS") {
            sunset = payload.results.sunset;
        }
    },

    defaults: {
        targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, currentweather will be targeted.)
        notification: "WEATHER", //if you use other weather module, modify this.
        opacity: '0.3',
        payloadConverter: (payload) => {
            console.log('this is from weatherbackground ' + JSON.stringify(payload))
            payload = payload.icon;
            sunset = moment(sunset).format('HH'),
                now = moment().format('HH');
            console.log("now: " + now + " Sunset: " + sunset);
            console.log(payload);
            if (now >= sunset) {
                var iconMap = {
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
                    "hazy": "modules/MMM-WeatherBackground/images/n_hazy.jpg"
                }
                return iconMap[payload]

            } else {

                var iconMap = {
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
                    "overcast": "modules/MMM-WeatherBackground/images/overcast.jpg",
                    "hazy": "modules/MMM-WeatherBackground/images/hazy.jpg",
                    "drizzle": "modules/MMM-WeatherBackground/images/drizzle.jpg",
                }
                return iconMap[payload]
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
                dom.style.transition = "background-image 1s ease 1s"
                var url = `url('${url}')`
                dom.style.backgroundImage = url
            }, 1000)
        }
        var doms = document.querySelectorAll(target)
        if (doms.length <= 0) {
            console.log("[WTHBGR] DOM not found.", target)
            return;
        }
        doms.forEach((dom) => {
            drawImage(dom)
        })
    }
})

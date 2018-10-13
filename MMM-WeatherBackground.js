//
// MMM-WeatherBackground
//  Modified by Cowboysdude for MMM-NOAA3

//var sunset;

Module.register("MMM-WeatherBackground", {

    defaults: {
        targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, currentweather will be targeted.)
        notification: "WEATHER", //if you use other weather module, modify this.
        opacity: '0.3',
        payloadConverter: (payload) => { 
		console.log(payload),
            icon = payload.icon,
            sunset = moment(payload.sunset).format('H'),  
            now = moment().format('H'),
		console.log("Now time :"+now+" Sunset :"+sunset);
			if (now >= sunset) {
                var iconMap = {
                    "Clear": "modules/MMM-WeatherBackground/images/n_clear.jpg",
                    "Sleet": "modules/MMM-WeatherBackground/images/n_sleet.jpg",
                    "Mostly Cloudy": "modules/MMM-WeatherBackground/images/n_mostlycloudy.jpg",
                    "Partly Cloudy": "modules/MMM-WeatherBackground/images/n_partlycloudy.jpg",
                    "Cloudy": "modules/MMM-WeatherBackground/images/n_cloudy.jpg",
                    "Rain": "modules/MMM-WeatherBackground/images/n_rain.jpg",
                    "Drizzle": "modules/MMM-WeatherBackground/images/n_drizzle.jpg",
                    "tstorms": "modules/MMM-WeatherBackground/images/n_tstorms.jpg",
                    "Snow": "modules/MMM-WeatherBackground/images/n_snow.jpg",
                    "Windy": "modules/MMM-WeatherBackground/images/n_windy.jpg",
                    "Fog": "modules/MMM-WeatherBackground/images/n_fog.jpg",
                    "Overcast": "modules/MMM-WeatherBackground/images/n_overcast.jpg",
                    "Hazy": "modules/MMM-WeatherBackground/images/n_hazy.jpg"
                } 
                return iconMap[icon]

            } else {

                var iconMap = {
                    "Sunny": "modules/MMM-WeatherBackground/images/clear.jpg",
                    "Clear": "modules/MMM-WeatherBackground/images/clear.jpg",
                    "Cloudy": "modules/MMM-WeatherBackground/images/cloudy.jpg",
                    "Mostly Cloudy": "modules/MMM-WeatherBackground/images/mostlycloudy.jpg",
                    "Partly Cloudy": "modules/MMM-WeatherBackground/images/partlycloudy.jpg",
                    "Overcast": "modules/MMM-WeatherBackground/images/overcast.jpg",
                    "Wind": "modules/MMM-WeatherBackground/images/windy.jpg",
                    "Rain": "modules/MMM-WeatherBackground/images/rain.jpg",
                    "tstorms": "modules/MMM-WeatherBackground/images/tstorms.jpg",
                    "Snow": "modules/MMM-WeatherBackground/images/snow.jpg",
                    "Fog": "modules/MMM-WeatherBackground/images/fog.jpg",
                    "Sleet": "modules/MMM-WeatherBackground/images/sleet.jpg", 
                    "Hazy": "modules/MMM-WeatherBackground/images/hazy.jpg",
                    "Drizzle": "modules/MMM-WeatherBackground/images/drizzle.jpg", 
                } 
                return iconMap[icon]
            }
		  // }
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
            console.log("[NOAA3_WTHBGR] DOM not found.", target)
            return;
        }
        doms.forEach((dom) => {
            drawImage(dom)
        })
    }
})

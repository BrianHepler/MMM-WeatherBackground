//
// MMM-WeatherBackground
//

//
// MMM-WeatherBackground
//

var sunset;

Module.register("MMM-WeatherBackground", {
	
	getStyles: function() {
		this.sendSocketNotification('GET_INFO');
        return ["MMM-WeatherBackground.css"]; 
    },
	 
  socketNotificationReceived: function(notification, payload) {
        if (notification === "SRSS_RESULTS") { 
		   sunset = payload.results.sunset; 
        }
    },
  
  defaults: {
    targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, currentweather will be targeted.)
    notification: "WEATHER", //if you use other weather module, modify this.
	
    payloadConverter: (payload)=> {
		 payload = payload.icon; 
         sunset = moment(sunset).format('HH'), 
		//working-> console.log(sunset),
		 now = moment().format('HH');
		 console.log("now: "+now+ "Sunset: "+sunset);
		  
		 if (now >= sunset) {
			  var iconMap = {
		    "clear": "clear night",
  			"sleet": "sleet night",
  			"mostlycloudy": "cloudy night",
  			"cloudy": "cloudy night",
  			"rain": "night rain",
  			"drizzle": "drizzle rain night",
  			"thunderstorm": "night thunderstorm",
  			"snow": "snow night",
  			"windy": "windy night",
			"fog":"fog night",
			"overcast":"overcast night"
	  } 
	   console.log(iconMap[payload]);	
	  return iconMap[payload] //return value be used for search keyword.
			 
		 } else {	
			 
      var iconMap = {
            "cloudy": "clouds",
  			"mostlycloudy": "clouds",
  			"overcast": "overcast",
  			"wind": "windy",
  			"rain": "heavy rain",
  			"rain": "rain",
  			"thunderstorm": "thunderstorm",
  			"snow": "snow",
  			"fog": "fog",
  			"clear": "clear",
  			"sleet": "sleet",
			"overcast":"overcast"
      }
      console.log(iconMap[payload]+"day");	  
	  return iconMap[payload] //return value be used for search keyword.
	  
		 }
    },
  },

  notificationReceived: function(noti, payload, sender) {
    switch(noti) {
      case "DOM_OBJECTS_CREATED" :
        break
      case this.config.notification :
        var target = (this.config.targetDOM) ? this.config.targetDOM : "#" + sender.data.identifier

        var t = this.config.payloadConverter(payload)
        this.loadImage(target, t)
        break
    }
  },

  loadImage: function(target, description) {
    var drawImage = function(dom) {
      var timer = setTimeout(()=>{
        //var w = dom.offsetWidth
        //var h = dom.offsetHeight
        //var url = `https://source.unsplash.com/${w}x${h}/?"${description}"`
        var seed = Date.now()
        var url = `https://source.unsplash.com/featured/?"${description}"&s=${seed}`
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
    doms.forEach((dom)=>{
      drawImage(dom)
    })
  }
})
//
// MMM-WeatherBackground
//

Module.register("MMM-WeatherBackground", {
  defaults: {
    targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, currentweather will be targeted.)
    notification: "CURRENTWEATHER_DATA", //if you use other weather module, modify this.
    payloadConverter: (payload)=> {
      var iconMap = {
        "01d": "sunny",
  			"02d": "clouds",
  			"03d": "cloudy",
  			"04d": "windy",
  			"09d": "heavy rain",
  			"10d": "rain",
  			"11d": "thunderstorm",
  			"13d": "snow",
  			"50d": "fog",
  			"01n": "clear night",
  			"02n": "cloudy night",
  			"03n": "cloudy night",
  			"04n": "cloudy night",
  			"09n": "night rain",
  			"10n": "night rain",
  			"11n": "night thunderstorm",
  			"13n": "night snow",
  			"50n": "windy night"
      }
      return iconMap[payload.data.weather[0].icon] //return value be used for search keyword.
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
        dom.style.backgroundPosition = "center"
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

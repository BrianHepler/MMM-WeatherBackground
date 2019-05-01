//
// MMM-WeatherBackground
//

Module.register("MMM-WeatherBackground", {
  defaults: {
    source: "currentweather",
	hemisphere: "n",
    targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, currentweather will be targeted.)
    notification: null, //if you use other weather module, modify this.
    defaultCollection: "4733334", // Should not be assigned in collections, this will be used.
    collections: {
      	  
	  ///////////////////// check
	  
	  "error": "4733180", // ✓ Collection for hemisphere error (different from "n" or "s".
	  
	  "clear-day spring": "4685704", // ✓
	  "clear-day summer": "4686133", // ✓
	  "clear-day autumn": "4687058", // ✓
	  "clear-day winter": "4685709", // ✓
	  
	  "sunny spring": "4685704", // ✓
	  "sunny summer": "4686133", // ✓
	  "sunny autumn": "4687058", // ✓
	  "sunny winter": "4685709", // ✓
	  
	  "clouds spring": "4686232", // ✓
	  "clouds summer": "4686874", // ✓
	  "clouds autumn": "4686985", // ✓
	  "clouds winter": "4686139", // ✓
	  
	  "cloudy spring": "4686232", // ✓
	  "cloudy summer": "4686874", // ✓
	  "cloudy autumn": "4686985", // ✓
	  "cloudy winter": "4686139", // ✓
	  
	  "cloudy-night spring": "4687194", // ✓
	  "cloudy-night summer": "4687191", // ✓
	  "cloudy-night autumn": "4687205", // ✓
	  "cloudy-night winter": "4687199", // ✓
	  
	  "partly-cloudy-day spring": "4685732", // ✓
	  "partly-cloudy-day summer": "4686191", // ✓
	  "partly-cloudy-day autumn": "4686041", // ✓
	  "partly-cloudy-day winter": "4686091", // ✓
	  "partly-cloudy-night spring": "4618856", // ✓
	  "partly-cloudy-night summer": "4618856", // ✓
	  "partly-cloudy-night autumn": "4618856", // ✓
	  "partly-cloudy-night winter": "4618856", // ✓
	  
	  "windy spring": "4686954", // ✓
	  "windy summer": "4686938", // ✓
	  "windy autumn": "4687039", // ✓
	  "windy winter": "4686925", // ✓
	  
	  "wind spring": "4686954", // ✓
	  "wind summer": "4686938", // ✓
	  "wind autumn": "4687039", // ✓
	  "wind winter": "4686925", // ✓
	  
	  "rain spring": "4712657", // ✓
	  "rain summer": "4613732", // ✓
	  "rain autumn": "4712671", // ✓
	  "rain winter": "4613732", // ✓
	  
	  "clear-night spring": "4687275", // ✓
	  "clear-night summer": "4687260", // ✓
	  "clear-night autumn": "4687269", // ✓
	  "clear-night winter": "4687314", // ✓
	  
	  "night-rain spring": "4613625", // ✓
	  "night-rain summer": "4613625", // ✓
	  "night-rain autumn": "4613625", // ✓
	  "night-rain winter": "4613625", // ✓
	  
	  "heavy-rain spring": "4613730", // ✓
	  "heavy-rain summer": "4613730", // ✓
	  "heavy-rain autumn": "4613730", // ✓
	  "heavy-rain winter": "4613730", // ✓
	  
	  "fog spring": "4700096", // ✓
	  "fog summer": "4700096", // ✓
	  "fog autumn": "4700092", // ✓
	  "fog winter": "4700092", // ✓
	  
	  "thunderstorm spring": "4613853", // ✓
	  "thunderstorm summer": "4613853", // ✓
	  "thunderstorm autumn": "4613853", // ✓
	  "thunderstorm winter": "4613853", // ✓
	  
	  "tornado spring": "4619143", // ✓
	  "tornado summer": "4619143", // ✓
	  "tornado autumn": "4619143", // ✓
	  "tornado winter": "4619143", // ✓
	  
	  "snow spring": "4625804", // ✓
	  "snow summer": "4625804", // ✓
	  "snow autumn": "4625804", // ✓
	  "snow winter": "4625804", // ✓
	  
	  "hail spring": "4710975", // ✓
	  "hail summer": "4710975", // ✓
	  "hail autumn": "4710975", // ✓
	  "hail winter": "4710975", // ✓
	  
	  "sleet spring": "4712657", // x
	  "sleet summer": "4613732", // x
	  "sleet autumn": "4712671", // x
	  "sleet winter": "4613732", // x
	  
	  // currentweather
	  "day sunny spring": "4685704", // ✓
	  "day sunny summer": "4686133", // ✓
	  "day sunny autumn": "4687058", // ✓
	  "day sunny winter": "4685709", // ✓
	  
	  "day cloudy spring": "4686232", // ✓
	  "day cloudy summer": "4686874", // ✓
	  "day cloudy autumn": "4686985", // ✓
	  "day cloudy winter": "4686139", // ✓
	  
	  "cloudy windy spring": "4711681", // ✓
	  "cloudy windy summer": "4686945", // ✓
	  "cloudy windy autumn": "4687003", // ✓
	  "cloudy windy winter": "4686964", // ✓
	  
	  "showers spring": "4712657", // ✓
	  "showers summer": "4613732", // ✓
	  "showers autumn": "4712671", // ✓
	  "showers winter": "4613732", // ✓
	  
	  "heavy rain spring": "4613730", // ✓
	  "heavy rain summer": "4613730", // ✓
	  "heavy rain autumn": "4613730", // ✓
	  "heavy rain winter": "4613730", // ✓
	  
	  "clear night spring": "4687275", // ✓
	  "clear night summer": "4687260", // ✓
	  "clear night autumn": "4687269", // ✓
	  "clear night winter": "4687314", // ✓
	  
	  "cloudy night spring": "4687194", // ✓
	  "cloudy night summer": "4687191", // ✓
	  "cloudy night autumn": "4687205", // ✓
	  "cloudy night winter": "4687199", // ✓
	  
	  "windy night spring": "4677630", // x
	  "windy night summer": "4677630", // x
	  "windy night autumn": "4677630", // x
	  "windy night winter": "4677630", // x
	  
	  "night showers spring": "4613625", // ✓
	  "night showers summer": "4613625", // ✓
	  "night showers autumn": "4613625", // ✓
	  "night showers winter": "4613625", // ✓
	  
	  "night rain spring": "4613625", // ✓
	  "night rain summer": "4613625", // ✓
	  "night rain autumn": "4613625", // ✓
	  "night rain winter": "4613625", // ✓
	  
	  "night thunderstorm spring": "4613853", // ✓
	  "night thunderstorm summer": "4613853", // ✓
	  "night thunderstorm autumn": "4613853", // ✓
	  "night thunderstorm winter": "4613853", // ✓
	  
	  "night snow spring": "4706685", // ✓
	  "night snow summer": "4706685", // ✓
	  "night snow autumn": "4706685", // ✓
	  "night snow winter": "4706685", // ✓
	  
	  "night alt cloudy windy spring": "4677630", // x
	  "night alt cloudy windy summer": "4677630", // x
	  "night alt cloudy windy autumn": "4677630", // x
	  "night alt cloudy windy winter": "4677630", // x
	  
	  // NOAA3
	  "breezy day spring": "4686954", // ✓
	  "breezy day summer": "4686938", // ✓
	  "breezy day autumn": "4687039", // ✓
	  "breezy day winter": "4686925", // ✓
	  "breezy night spring": "4677630", // x
	  "breezy night summer": "4677630", // x
	  "breezy night autumn": "4677630", // x
	  "breezy night winter": "4677630", // x
	  
	  "chanceflurries day spring": "4686954", // ✓
	  "chanceflurries day summer": "4686938", // ✓
	  "chanceflurries day autumn": "4687039", // ✓
	  "chanceflurries day winter": "4686925", // ✓
	  "chanceflurries night spring": "4677630", // x
	  "chanceflurries night summer": "4677630", // x
	  "chanceflurries night autumn": "4677630", // x
	  "chanceflurries night winter": "4677630", // x
	  
	  "chancerain day spring": "4712657", // ✓
	  "chancerain day summer": "4613732", // ✓
	  "chancerain day autumn": "4712671", // ✓
	  "chancerain day winter": "4613732", // ✓
	  "chancerain night spring": "4613625", // ✓
	  "chancerain night summer": "4613625", // ✓
	  "chancerain night autumn": "4613625", // ✓
	  "chancerain night winter": "4613625", // ✓
	  
	  "chancesleet day spring": "4712657", // x
	  "chancesleet day summer": "4613732", // x
	  "chancesleet day autumn": "4712671", // x
	  "chancesleet day winter": "4613732", // x
	  "chancesleet night spring": "4613625", // x
	  "chancesleet night summer": "4613625", // x
	  "chancesleet night autumn": "4613625", // x
	  "chancesleet night winter": "4613625", // x
	  
	  "snow day spring": "4625804", // ✓
	  "snow day summer": "4625804", // ✓
	  "snow day autumn": "4625804", // ✓
	  "snow day winter": "4625804", // ✓
	  "snow night spring": "4706685", // ✓
	  "snow night summer": "4706685", // ✓
	  "snow night autumn": "4706685", // ✓
	  "snow night winter": "4706685", // ✓
	  
	  "chancetstorms day spring": "4613853", // x
	  "chancetstorms day summer": "4613853", // x
	  "chancetstorms day autumn": "4613853", // x
	  "chancetstorms day winter": "4613853", // x
	  "chancetstorms night spring": "4613853", // ✓
	  "chancetstorms night summer": "4613853", // ✓
	  "chancetstorms night autumn": "4613853", // ✓
	  "chancetstorms night winter": "4613853", // ✓
	  
	  "clear day spring": "4685704", // ✓
	  "clear day summer": "4686133", // ✓
	  "clear day autumn": "4687058", // ✓
	  "clear day winter": "4685709", // ✓
	  "clear night spring": "4687275", // ✓
	  "clear night summer": "4687260", // ✓
	  "clear night autumn": "4687269", // ✓
	  "clear night winter": "4687314", // ✓
	  
	  "cloudy day spring": "4686232", // ✓
	  "cloudy day summer": "4686874", // ✓
	  "cloudy day autumn": "4686985", // ✓
	  "cloudy day winter": "4686139", // ✓
	  "cloudy night spring": "4687194", // ✓
	  "cloudy night summer": "4687191", // ✓
	  "cloudy night autumn": "4687205", // ✓
	  "cloudy night winter": "4687199", // ✓
	  
	  "drizzle day spring": "4613732", // ✓
	  "drizzle day summer": "4613732", // ✓
	  "drizzle day autumn": "4613732", // ✓
	  "drizzle day winter": "4613732", // ✓
	  "drizzle night spring": "4613625", // ✓
	  "drizzle night summer": "4613625", // ✓
	  "drizzle night autumn": "4613625", // ✓
	  "drizzle night winter": "4613625", // ✓
	  
	  "flurries day spring": "4686954", // ✓
	  "flurries day summer": "4686938", // ✓
	  "flurries day autumn": "4687039", // ✓
	  "flurries day winter": "4686925", // ✓
	  "flurries night spring": "4677630", // x
	  "flurries night summer": "4677630", // x
	  "flurries night autumn": "4677630", // x
	  "flurries night winter": "4677630", // x
	  
	  "fog day spring": "4700096", // ✓
	  "fog day summer": "4700096", // ✓
	  "fog day autumn": "4700096", // ✓
	  "fog day winter": "4700096", // ✓
	  "fog night spring": "4700092", // ✓
	  "fog night summer": "4700092", // ✓
	  "fog night autumn": "4700092", // ✓
	  "fog night winter": "4700092", // ✓
	  
	  "hazy day spring": "4708560", // ✓
	  "hazy day summer": "4708560", // ✓
	  "hazy day autumn": "4708560", // ✓
	  "hazy day winter": "4708560", // ✓
	  "hazy night spring": "4708560", // ✓
	  "hazy night summer": "4708560", // ✓
	  "hazy night autumn": "4708560", // ✓
	  "hazy night winter": "4708560", // ✓
	  
	  "mostlyclear day spring": "4685704", // ✓
	  "mostlyclear day summer": "4686133", // ✓
	  "mostlyclear day autumn": "4687058", // ✓
	  "mostlyclear day winter": "4685709", // ✓
	  "mostlyclear night spring": "4687275", // ✓
	  "mostlyclear night summer": "4687260", // ✓
	  "mostlyclear night autumn": "4687269", // ✓
	  "mostlyclear night winter": "4687314", // ✓
	  
	  "mostlycloudy day spring": "4686232", // ✓
	  "mostlycloudy day summer": "4686874", // ✓
	  "mostlycloudy day autumn": "4686985", // ✓
	  "mostlycloudy day winter": "4686139", // ✓
	  "mostlycloudy night spring": "4687194", // ✓
	  "mostlycloudy night summer": "4687191", // ✓
	  "mostlycloudy night autumn": "4687205", // ✓
	  "mostlycloudy night winter": "4687199", // ✓
	  
	  "mostlysunny day spring": "4685704", // ✓
	  "mostlysunny day summer": "4686133", // ✓
	  "mostlysunny day autumn": "4687058", // ✓
	  "mostlysunny day winter": "4685709", // ✓
	  "mostlysunny night spring": "4687275", // ✓
	  "mostlysunny night summer": "4687260", // ✓
	  "mostlysunny night autumn": "4687269", // ✓
	  "mostlysunny night winter": "4687314", // ✓
	  
	  "overcast day spring": "4686232", // ✓
	  "overcast day summer": "4686874", // ✓
	  "overcast day autumn": "4686985", // ✓
	  "overcast day winter": "4686139", // ✓
	  "overcast night spring": "4687194", // ✓
	  "overcast night summer": "4687191", // ✓
	  "overcast night autumn": "4687205", // ✓
	  "overcast night winter": "4687199", // ✓
	  
	  "partlycloudy day spring": "4685732", // ✓
	  "partlycloudy day summer": "4686191", // ✓
	  "partlycloudy day autumn": "4686041", // ✓
	  "partlycloudy day winter": "4686091", // ✓
	  "partlycloudy night spring": "4618856", // ✓
	  "partlycloudy night summer": "4618856", // ✓
	  "partlycloudy night autumn": "4618856", // ✓
	  "partlycloudy night winter": "4618856", // ✓
	  
	  "rain day spring": "4712657", // ✓
	  "rain day summer": "4613732", // ✓
	  "rain day autumn": "4712671", // ✓
	  "rain day winter": "4613732", // ✓
	  "rain night spring": "4613625", // ✓
	  "rain night summer": "4613625", // ✓
	  "rain night autumn": "4613625", // ✓
	  "rain night winter": "4613625", // ✓
	  
	  "sleet day spring": "4712657", // x
	  "sleet day summer": "4613732", // x
	  "sleet day autumn": "4712671", // x
	  "sleet day winter": "4613732", // x
	  "sleet night spring": "4613625", // x
	  "sleet night summer": "4613625", // x
	  "sleet night autumn": "4613625", // x
	  "sleet night winter": "4613625", // x
	  
	  "sunny day spring": "4685704", // ✓
	  "sunny day summer": "4686133", // ✓
	  "sunny day autumn": "4687058", // ✓
	  "sunny day winter": "4685709", // ✓
	  "sunny night spring": "4687275", // ✓
	  "sunny night summer": "4687260", // ✓
	  "sunny night autumn": "4687269", // ✓
	  "sunny night winter": "4687314", // ✓
	  
	  "thunderstorm day spring": "4613853", // ✓
	  "thunderstorm day summer": "4613853", // ✓
	  "thunderstorm day autumn": "4613853", // ✓
	  "thunderstorm day winter": "4613853", // ✓
	  "thunderstorm night spring": "4613853", // ✓
	  "thunderstorm night summer": "4613853", // ✓
	  "thunderstorm night autumn": "4613853", // ✓
	  "thunderstorm night winter": "4613853", // ✓
	  
	  "wind day spring": "4686954", // ✓
	  "wind day summer": "4686938", // ✓
	  "wind day autumn": "4687039", // ✓
	  "wind day winter": "4686925", // ✓
	  "wind night spring": "4677630", // x
	  "wind night summer": "4677630", // x
	  "wind night autumn": "4677630", // x
	  "wind night winter": "4677630", // x
	  /////////////////////
	},  	
    sources: {
      "currentweather": {
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
      "MMM-NOAA3": {
        notification: "WEATHER",
        payloadConverter:(payload)=>{
          var n = (moment().isAfter(moment(payload.sunset))) ? "night" : "day"
          var ret = payload.icon
          var iconMap = {
              "tstorms": "thunderstorm",
              "chancesnow": "snow"
          }
          if (ret in iconMap) {
            ret = iconMap[ret]
          }
          return ret + " " + n
        }
      },
      "MMM-DarkSkyForecast": {
        notification: "DARK_SKY_FORECAST_WEATHER_UPDATE",
        payloadConverter:(payload)=>{
          return payload.currently.icon
        }
      }
    }	
  },
//////////////////////////////// Necessary to obtain the month of the year.
	  getScripts: function() {
		  return ['moment.js']
	  },
//////////////////////////////////////////
  start: function() {
    this.source = (typeof this.config.sources[this.config.source] !== undefined) ? this.config.sources[this.config.source] : this.config.sources["currentweather"]
    this.listenNotification = (this.config.notification) ? this.config.notification : this.source.notification
    this.payloadConverter = (this.config.payloadConverter) ? this.config.payloadConverter : this.source.payloadConverter
  },

  notificationReceived: function(noti, payload, sender) {
	//////////// check
	var now = moment().format('M')		
	var season
	if(now>2 && now<6 && this.config.hemisphere=="n") {
		season = "spring"
	} else if(now>2 && now<6 && this.config.hemisphere=="s") {
		season = "autumn"
	} else if(now>5 && now<9 && this.config.hemisphere=="n") {
		season = "summer"	
	} else if(now>5 && now<9 && this.config.hemisphere=="s") {
		season = "winter"
	} else if(now>8 && now<12 && this.config.hemisphere=="n") {
		season = "autumn"
	} else if(now>8 && now<12 && this.config.hemisphere=="s") {
		season = "spring"
	} else if(now>11 || now<3 && this.config.hemisphere=="n") {
		season = "winter"
	} else if(now>11 || now<3 && this.config.hemisphere=="s") {
		season = "summer"	
	} else if(this.config.hemisphere!="n" && this.config.hemisphere!="s") {
		season = "error"
	}	
		
	switch(noti) {
      case "DOM_OBJECTS_CREATED" :
        break
      case this.listenNotification :
		if(season=="error"){ // load error image if hemisphere is not "n" neither "s"
			var target = (this.config.targetDOM) ? this.config.targetDOM : "#" + sender.data.identifier
			var t = season
			this.loadImage(target, t)
			break
		} else {
			var target = (this.config.targetDOM) ? this.config.targetDOM : "#" + sender.data.identifier
        	var t = this.payloadConverter(payload) + " " + season
			this.loadImage(target, t)		
			break
		}	
    }
	////////////
  },

  loadImage: function(target, description) {

	console.log("[WTHBGR] Image searching:", description) // + "", season)
	
      var collection = (Object.keys(this.config.collections).indexOf(description) >= 0)
      ? "collection/" + this.config.collections[description]
      : "collection/" + this.config.defaultCollection // load error image setting collection deprecated in config.js
    var drawImage = (dom) => {
      var timer = setTimeout(()=>{
        var seed = Date.now()
        var url = `https://source.unsplash.com/${collection}/?${description}&s=${seed}`
        console.log(url)
        dom.style.backgroundSize = "cover"
        dom.style.backgroundPosition = "center"
        dom.style.transition = "background-image 1s ease 1s"
        var url = `url('${url}')`
        dom.style.backgroundImage = url
        dom.style.backgroundPosition = "center"
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

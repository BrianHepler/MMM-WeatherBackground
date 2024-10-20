/* eslint-disable prettier/prettier */
/* global Log */
//
// MMM-WeatherBackground
//

Module.register("MMM-WeatherBackground", {
  defaults: {
    verbose: false,
    source: "weather",
    size: null, // "1920x480", whatever....
    hemisphere: "n", // 'n', 's' or null/false  // will be deprecated. use monthMap instead.
    monthMap: [
      "NewYear",
      "winter",
      "spring",
      "spring flower",
      "bright",
      "summer heat",
      "summer beach",
      "summer vacation",
      "autumn",
      "autumn leaves",
      "winter",
      "christmas"
    ],
    targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, weather will be targeted.)
    notification: null, //if you use other weather module, modify this.
    payloadConverter: null,
    defaultCollection: null, // When matched collection not found, this will be used.
    externalCollections: "collections.json", // or null
    collections: {},
    clientID: "",
    sources: {
      weather: {
        notification: "CURRENTWEATHER_TYPE",
        payloadConverter: (payload) => {
          return payload.type.replaceAll("_", " ");
        }
      },
      "MMM-NOAA3": {
        notification: "WEATHER",
        payloadConverter: (payload) => {
          var now = new Date();
          if (payload.sunset != null) { 
            var sunset = payload.sunset.split(":");
            var sunsetTime = new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate(),
              sunset[0],
              sunset[1]
            );
          } else { 
            var sunsetTime = new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate(), 17,1)
          }
          
          var n = now.getTime() >= sunsetTime.getTime() ? "night" : "day";
          var ret = payload.icon;
          var iconMap = {
            tstorms: "thunderstorm",
            chancesnow: "snow"
          };
          if (ret in iconMap) {
            ret = iconMap[ret];
          }
          return ret + " " + n;
        }
      },
      "MMM-DarkSkyForecast": {
        notification: "DARK_SKY_FORECAST_WEATHER_UPDATE",
        payloadConverter: (payload) => {
          console.log("Payload: " + payload.currently.icon);
          return payload.currently.icon;
        }
      },
      "MMM-OpenWeatherForecast": {
        notification: "OPENWEATHER_FORECAST_WEATHER_UPDATE",
        payloadConverter: (payload) => {
          console.log("Payload: " + payload.current.weather[0].description);
          return payload.current.weather.description;
        }
      }
    }
  },

  getStyles: function () {
    return ["MMM-WeatherBackground.css"];
  },

  start: function () {
    this.collections = {};
    this.monthMap = this.config.monthMap;
    this.source =
      typeof this.config.sources[this.config.source] !== undefined
        ? this.config.sources[this.config.source]
        : this.config.sources["weather"];
    this.listenNotification = this.config.notification
      ? this.config.notification
      : this.source.notification;
    this.payloadConverter = this.config.payloadConverter
      ? this.config.payloadConverter
      : this.source.payloadConverter;

    if (this.config.verbose) console.log("Weather source set to " + this.source.notification);

    if (typeof this.config.externalCollections === "string") {
      fetch("modules/MMM-WeatherBackground/" + this.config.externalCollections)
        .then(async (response) => {
          if (!response.ok) {
            throw new Error();
          }
          this.collections = await Object.assign(
            {},
            this.config.collections,
            await response.json()
          );
        })
        .catch((err) => {
          if (config.verbose)
            Log.err(
              `[WHTBGR] External Collection Error: ${this.config.externalCollections}`
            );
        });
    }
  },

  notificationReceived: async function (notification, payload, sender) {
    var now = new Date();
    var monthIndex = now.getMonth();

    if (this.config.verbose && notification !== "CLOCK_SECOND") {
      console.log("Received notification " + notification + " from " + sender);
      console.log(payload);
    }

    if (notification === this.listenNotification) {
      if (this.config.verbose) console.log("Weather notification received. Processing...");
      var target = this.config.targetDOM
        ? this.config.targetDOM
        : "#" + sender.data.identifier;
      var monthKeyword = this.monthMap[monthIndex];
      var description = this.payloadConverter(payload);
      await this.loadImage(target, {monthKeyword, description});
    }
  },
  
  //https://source.unsplash.com/collection/4733334/?winter,day,cloudy&s=1631542013371
  loadImage: async function (target, { monthKeyword, description } = {}) {
    if (this.config.verbose) console.log("this.collections", this.collections);
    var seed = Date.now();
    var convertedKeywords = (monthKeyword + " " + description).split(" ");
    var score = 0;
    var matchedCollection = this.config.defaultCollection ?? null;
    if (this.config.verbose)
      console.log(
        "Keywords, converted keywords, intersection, score, matched collection"
      );
    for (let [keywords, collection] of Object.entries(this.collections)) {
      var intersection = keywords
        .split(" ")
        .filter((x) => convertedKeywords.includes(x)).length;
      
        if (this.config.verbose) {
        console.log(
          keywords,
          convertedKeywords,
          intersection,
          score,
          matchedCollection
        );
      }
      
      if (score < intersection) {
        score = intersection;
        matchedCollection = collection;
      }
    }

    const size = this.config.size ? `/${this.config.size}` : "";
    const url = await this.getPhotoUrl(matchedCollection, size, convertedKeywords, seed)

    var drawImage = (dom) => {
      var timer = setTimeout(() => {
        dom.classList.add("WTHBGR");
        dom.style.backgroundImage = `url(${url})`;
        if (this.config.verbose) console.log("[WTHBGR] new Image URL:", url);
      }, 1000);
    };

    var doms = document.querySelectorAll(target);
    if (doms.length <= 0) {
      if (this.config.verbose) console.log("[WTHBGR] DOM not found.", target);
      return;
    }
    doms.forEach((dom) => {
      drawImage(dom);
    });
  },

  getPhotoUrl: async function (matchedCollection, size, convertedKeywords, seed) {
    const baseUrl = "https://api.unsplash.com/photos/random"
    const query = convertedKeywords.join("+")

    const response = await fetch(baseUrl + "?query=" + query + "&client_id=" + this.config.clientID)
    const data = await response.json()

    return data.urls.full
  }
});

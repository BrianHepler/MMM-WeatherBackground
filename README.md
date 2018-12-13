# MMM-WeatherBackground
MagicMirror Module - for Weather image background from Unsplash. This is a plugin of other weather modules.

## Screenshot
![Screenshot](https://github.com/eouia/MMM-WeatherBackground/blob/master/scr.png?raw=true)


## UPDATED
**[2018-12-13]**
- Now you can assign specific(yours or other's) collection to get more exact or customized pictures.

**[2018-12-03]**
- Now you can simply set `source` instead complex notification & payloadConverter
  - `MMM-DarkSkyForecast` is supported as `source`
  - Currently supported source : `currentweather`, `MMM-NOAA3`, `MMM-DarkSkyForecast`
- Background image position is centered now.


## Installation
```shell
cd ~/MagicMirror/modules
git clone https://github.com/eouia/MMM-WeatherBackground
```

## Configuration
### Simple
```javascript
{
  module: "MMM-WeatherBackground",
  // don't assign position.
  config: {}
},
```
### Defaults & details
```javascript
{
  module: "MMM-WeatherBackground",
  config: {
    targetDOM: ".fullscreen.below", //null or DomSelector for target.
    // if null, currentweather will be targeted.
    // examples: ".newsfeed", "#SOME_SPECIAL_DOM", ".top.left .module"
    source : "currentweather", // `currentweather`, `MMM-NOAA3`, `MMM-DarkSkyForecast`
    defaultCollection: "featured", // If not assigned in collections, this will be used.
    collections: {
      "clear-day": "1877260", // assign specific collection to keyword.
      //In this case, if weather keyword be "clear-day", "1877260"(https://unsplash.com/collections/1877260/summer-sunny-vacation) will be used as source.
    },
  }
},
```

## Tip
You'd better modify your CSS to enhance visibilties of your modules. Below is just one of examples.
```CSS
.module {
  background-color:rgba(0,0,0,0.5)
}
```

Sometimes, unsplash could return mismatched images with keyword.

# MMM-WeatherBackground
MagicMirror Module - for Weather image background from Unsplash. This is a plugin of other weather modules.

## Screenshot
![Screenshot](https://github.com/eouia/MMM-WeatherBackground/blob/master/scr.png?raw=true)


## UPDATED
**[2019-05-01]**
- Now you must not assign specific (yours or other's) collection to get more exact or customized pictures.
- No need to set collections as they are predetermined in the module, reflecting the different weather conditions, day or night, and the different seasons of the year.
- If you mistakenly maintain the collections configuration, the default collections will not work and those you define either, since the keywords have changed.
- defaultCollection: "featured" is no longer necessary in config.js.
- New hemisphere option in config.js for the module to deliver photos according to the season of the year.
- If the hemisphere configuration is different from "n" or "s", it will load an error image.
- The collections option in config.js is deprecated.
- If the collections configuration is maintained, it will load an error image.

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
{
	module: "MMM-WeatherBackground",
	config: {
	  targetDOM: ".MMM-Dummy", //null or DomSelector for target.
		// if null, currentweather will be targeted.
		// examples: ".newsfeed", "#SOME_SPECIAL_DOM", ".top.left .module"
		hemisphere: "n", // "n" (north) or "s" (southern) to establish the correct season of the year.
		source : "MMM-NOAA3", // `currentweather`, `MMM-NOAA3`, `MMM-DarkSkyForecast`
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

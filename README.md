# MMM-WeatherBackground
MagicMirror Module - for Weather image background from Unsplash. This is a plugin of other weather modules.

## Screenshot
![Screenshot](https://github.com/eouia/MMM-WeatherBackground/blob/master/scr.png?raw=true)


## UPDATED
**[2021-09-13]**
- **REMOVED** Removing dependency of dying `momentJS`
- **ADDED** `config.monthMap` : Now you can define keywords per month. (It could be the replacement of `config.hemisphere`). You can set `winter christmas santa-clause` as keyword for `December`. Or you can set `spring` to `March`, `April`, `May`.
- **ADDED** `config.externalCollections` : separated collections data to external file.
- **ADDED** `config.size` is added. you can set pictures original dimension by this value. (this value is not for cropping. Rather for resolution optimizing.)
- **CHANGED** Default weather module source - `weather` is added.
- **REMOVED** Obsoleted weather module source - `currentweather` is removed.
- **ADDED** CSS controllable. Now you can control the style(CSS selector `.WTHBGR`) more comfortably.
- **CHANGED** Current collection list was too huge and not maintained. Now Collection fallback is supported. When the module cannot find a proper collection, the keyword searching would be alternated instead.
- **CHANGED** Now, collection matching is based on match-score. 
- 
For example;

When the collections are set like the belows;
```json
{
"cloudy" : "12345",
"cloudy summer": "23456",
"cloudy winter": "34567"
}
```
In this case, If `.payloadConverter()` returns `cloudy day summer`, `cloudy summer` will be selected as `collection` because it matches better. If `.payloadConverter()` returns `thunderstorm winter`, `cloudy winter` will be selected. If `.payloadConvert()` returns `spring sunny`, no collection matched so keyword searching `spring, sunny` will be executed.
So, you don't need to describe all possible collections. Just keep essential key collections. 


**[2019-05-01]** (PR by @mohace)
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
git clone https://github.com/BrianHepler/MMM-WeatherBackground
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
```js
{
  module: "MMM-WeatherBackground",
  config: {
    verbose: false, // If you want to leave some log message, set this as true
    source: "weather", // "weather", "MMM-NOAA3", "MMM-DarkskyForecast".  If you want to use different source, manually set `notification` and `payloadConverter`
    size: null, // "1920x480", whatever....
    hemisphere: "n", // 'n', 's' or null/false  (For backward compatibility) // will be deprecated. use monthMap instead.
    monthMap: ['NewYear', 'winter', 'spring', 'spring flower', 'joy', 'summer rain', 'summer beach', 'summer vacation', 'autumn', 'autumn leaves', 'winter', 'christmas'], // set your custom keyword for each month.
    //monthMap: ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'],// 
    //monthMap: null, false, or []
    targetDOM: ".fullscreen.below", //null or DomSelector for target. (if null, weather will be targeted.)
    notification: null, // when you need another `source` from `source, modify this.
    payloadConverter: null, // your custom payloadConverter callback.
    defaultCollection: null, // When matched collection not found, this will be used.
    externalCollections: "collections.json", // or null. // I recommend you rename this file to prevent update-conflicts.
    collections: {}, // This will be combined with externalCollections. (For backward compatibility)
  }
},
```

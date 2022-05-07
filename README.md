# MMM-WeatherBackground

MagicMirror Module – Displays a background from Unsplash based upon your weather module. This module requires a working weather module to function.

This module will search [Unsplash](https://unsplash.com) for an image based upon the current weather conditions as reported by your weather module. When your weather module reports rain, it will display images of rain. Snow for snow, etc.

The `monthMap` array allows you to refine the search by providing an additional search term. For example, the default keyword for April is “spring” and the keyword for October is “autumn”. Combined with the weather module reporting “showers”, the search term for images is “spring showers” in April and “autumn showers” in October.

## Screenshot

![Screenshot](https://github.com/eouia/MMM-WeatherBackground/blob/master/scr.png?raw=true)

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

### Configuration Options
|Option | Default | Description |
|--------|--------|----|
|verbose| `false` | Enable log messages.|
|source| `weather` | Which weather module to use for image searches. Possible values:  `weather`,  `MMM-NOAA3`,  `MMM-DarkskyForecast` **Note:** Dark Sky is scheduled to cease operation at the end of 2022.|
| size | `null` | The size of the image. This does not resize the image, but is for display optimization. Values: '1920x1080', '720x480', etc. |
| hemisphere | `n` | Deprecated. |
| monthMap | `['NewYear', 'winter', 'spring', 'spring flower', 'joy', 'summer rain', 'summer beach', 'summer vacation', 'autumn', 'autumn leaves', 'winter', 'christmas']` | An array of 12 keywords describing January to December. Used to refine image searches.
| targetDOM | `.fullscreen.below` | The Magic Mirror position value where you wish the image to appear. |
| notification | `null` | Which notification message to use to determine the image search. Usefull for integrating with unsupported weather modules. |
| payloadConverter | `null` | Callback for custom weather notification processor. The return value is the search string for an appropriate image. See the Payload Converter section below for more information. |
| defaultCollection | `null` | Default value if there is no match between the weather condition and the collection. |
| externalCollection | `collections.json` | Name of a JSON file containing the collection map. The collection map links weather conditions to image IDs in UnSplash. |

### Adjusting Image Brightness

By default, the background image is displayed at 100% brightness. This may wash out the text of other modules, especially on sunny days. The easiest way to fix this is to modify your `custom.css` file in the Magic Mirror CSS folder (usually `/home/pi/MagicMirror/css/custom.css`). Add this line:

```css
.WTHBGR {filter: brightness(0.3)}
```

Adjust the value in parentheses up or down to suit your taste. The range is from 1.0 to 0.

### Custom Weather Processing (Payload Converter)

You can write your own routine to process the notification of any module that broadcasts via the sendNotification() function. This is done by using the `notification` and `payloadConverter` fields in the module configuration. This will override the existing module logic and exclusively use your code to react to the notification that you specify.

For example: If there was a weather module called “MMM-MarsWeather” that tracked the weather on Mars, it might broadcast notifications using the notification “MARS_CONDITION” and include a simple string of words as the condition. String values such as “hot and dry” or “hot and windy” make up the payload for the notification. To process these notifications, you would specify the correct notification like so:

```json
  module: "MMM-WeatherBackground",
  config: {
        notification: "MARS_CONDITION",
       }
```

You then will want to write a routine that will read the payload and return the search terms that will get the image you want from Unsplash. In the below example, the map has the payload value as the key and the search terms as the value.

```javascript
payloadConverter: (payload) => {
 var marsMap = {
  “hot and dry”: “sunny desert”,
  “hot and windy”: “dust devil”,
  “hot and dark”: “nighttime desert”,
  “alien invasion”: “xenomorphs”
 }
 return marsMap[payload.toString()];
},
```

Combining these two values will allow you to customize the search terms for Unsplash to react to whatever notification you wish. Note: It does not have to be a weather module. You can configure this for any notification.

## Version History
**[2022-04-29]** by brian hepler
- Rewrote and reorganized README.MD file.

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

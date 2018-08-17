# MMM-WeatherBackground
MagicMirror Module - for Weather image background from Unsplash. This is a plugin of other weather modules.

## Screenshot
![Screenshot](https://github.com/eouia/MMM-WeatherBackground/blob/master/scr.png?raw=true)

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

    // You don't need to care about belows;
    notification: "CURRENTWEATHER_DATA", //if you want to use other notification, modify this.
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
      //other solution: return payload.data.weather[0].description
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

# MMM-WeatherBackground
MagicMirror Module - for Weather image background from Unsplash. This is a plugin of other weather modules.

## Screenshot
![Screenshot](scr.png)

## Installation
```shell
cd ~/MagicMirror/modules
git clone https://github.com/cowboysdude/MMM-WeatherBackground
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
```  
        {
            disabled: false,
            module: "MMM-WeatherBackground"  
        } 
```
That's pretty much the entire config entry that can be put anywhere in your config.js
Sometimes, unsplash could return mismatched images with keyword. 

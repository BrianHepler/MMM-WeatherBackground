# MMM-WeatherBackground
MagicMirror Module - for Weather image background. This is a plugin of other weather modules.

## Screenshot
  Day
![Screenshot](scr.png)

  Night 
![Screenshot](scr1.JPG)


## Installation
```shell
cd ~/MagicMirror/modules
git clone https://github.com/cowboysdude/MMM-WeatherBackground
cd MMM-WeatherBackground
npm install in the MMM-WeatherBackground directory
```

## Configuration
### Simple
```javascript
{
            disabled: false,
            module: "MMM-WeatherBackground",
            config: {
            opacity: "0.3" //This is the color behind the modules so you can see them better.   Higher the number the darker the color
            //  default in module is set to 0.4
            }
}, 
``` 
That's pretty much the entire config entry that can be put anywhere in your config.js.
## BE AWARE
If you don't get a background let me know what the weather in the module says, perhaps there's no image for it and needs to be updated :)

# Steinel Z-wave

Adds support for Steinel Smart Home Z-wave devices made by [Steinel](https://www.steinel.de/en/smart-home/)

## Links:
[Steinel app Athom apps](https://apps.athom.com/app/de.Steinel)                    
[Steinel Github repository](https://github.com/TedTolboom/de.Steinel)   

**Note:** This app is using [HomeyConfig composer](https://www.npmjs.com/package/node-homey-config-composer).   
Please file Pull Requests on the *development* branch of this repository and with respect to the refactored files in _/drivers_ and _/config_ folders.   

## Supported devices (and capabilities)
* IS 140-2 Z-wave motion detector (onoff, measure_luminance, alarm_motion)   
* L 180 LED iHF Z-wave Outdoor light (onoff, *dim*, measure_luminance, alarm_motion)   
* XLED home 2 Z-wave Floodlight (onoff, measure_luminance, alarm_motion)   
* RS LED D2 Z-wave Indoor light (onoff, measure_luminance, alarm_motion)   

## Supported Languages:
* English

 ## Feedback:
 Any requests please post them in the [Steinel app topic on the Athom Forum](https://forum.athom.com/discussion/3834/) or contact me on [Slack](https://athomcommunity.slack.com/team/tedtolboom)   

## Change Log:
### v 0.1.0
* Update devices to light class (re-inclusion required)    
* Add sensor capability (custom) flow cards for motion alarm and measure_luminance    
* Update Homey meshdriver to 1.2.10      

### v 0.0.4
* Administrative update; add link to community forum topic    

### v 0.0.3
* Removed dimming capability for all but L810 LED iHF device (updated mobile cards)
* Check and update all parameters for all devices

### v 0.0.2
* ~Added dimming capability for all devices~ (update incorrect)
* Updated onoff capability to BASIC CC  

### v 0.0.1
* Initial release for testing

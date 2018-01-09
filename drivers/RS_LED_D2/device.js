'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// Documentation: https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2243/RSLEDD2Z-Wave_5spr_110054844_11.04.17.pdf

class SteinhelRSLEDD2 extends ZwaveDevice {
	onMeshInit() {
		this.registerCapability('onoff', 'BASIC');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
		this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');
		this.registerCapability('alarm_motion', 'NOTIFICATION');
	}
}
module.exports = SteinhelRSLEDD2;

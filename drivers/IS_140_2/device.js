'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// Documentation: https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2310/IS140-2Z-Wave_5spr_110050437_11.04.17.pdf

class SteinelIS1402 extends ZwaveDevice {
	onMeshInit() {
		this.registerCapability('onoff', 'BASIC');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
		this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');
		this.registerCapability('alarm_motion', 'NOTIFICATION');
	}
}
module.exports = SteinelIS1402;

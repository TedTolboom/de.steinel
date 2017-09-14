'use strict';

const Homey = require('homey');

class SteinelZwave extends Homey.App {

	onInit() {

		this.log('Steinel Z-wave is running...');

	}

}

module.exports = SteinelZwave;

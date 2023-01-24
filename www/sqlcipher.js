var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var exec = require('cordova/exec');
var cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');
function SqlCipher() {

}

ElectronDB.prototype.createElectronDB = function(successCallback, errorCallback) {

    exec(successCallback, errorCallback, 'sqlcipher', 'createElectronDB', [])
}

module.export = new SqlCipher();

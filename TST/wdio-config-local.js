'use strict';

const commonConfig = require('./wdio-common-config.js').wdioConfig;
const selenium = require('selenium-standalone');
const seleniumVersion = require('./selenium-standalone-version-config.js');

global.__config = require('./wdio-common-config.js');

let seleniumChild; // eslint-disable-line init-declarations

exports.config = Object.assign({}, commonConfig, {
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 5
    }],
    onPrepare() {
        selenium.start(seleniumVersion, (err, child) => { // eslint-disable-line consistent-return
            if (err) {
                console.log(err); // eslint-disable-line no-console
                return process.exit();
            }
            seleniumChild = child;
        });
    },

    onComplete() {
        if (seleniumChild) {
            seleniumChild.kill();
        }
    }
});

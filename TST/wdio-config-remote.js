'use strict';

const commonConfig = require('./wdio-common-config.js').wdioConfig;

global.__config = require('./wdio-common-config.js');

exports.config = Object.assign({}, commonConfig, {
    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    capabilities: [{
        'browserName': 'chrome',
        // 5 is the max number of instances for our current Browserstack plan
        'maxInstances': 5,
        'os': 'Windows',
        'os_version': '10', // eslint-disable-line camelcase
        'resolution': '1920x1080',
        'project': 'TST',
        'browserstack.debug': 'true',
        'browserstack.networkLogs': 'true'
    }]
});

'use strict';

require('dotenv').config();

module.exports = {
    baseUrl: process.env.URL || 'https://localhost:8080/',
    wdioConfig: {
        specs: [
            './spec/**/*.js'
        ],
        exclude: [],
        sync: true,
        logLevel: 'error',
        coloredLogs: true,
        screenshotPath: './errorShots/',
        connectionRetryTimeout: 90000,
        connectionRetryCount: 3,
        maxInstances: 5,
        waitforTimeout: 5e3,
        framework: 'mocha',
        reporters: ['spec'],
        mochaOpts: {
            ui: 'bdd',
            timeout: 90000,
            retries: 1
        },
        bail: 0,
        resolution: '1920x1080',
        afterTest(test) {
            let currentUrl = null;
            if (!test.passed) {
                try {
                    currentUrl = browser.getUrl();
                } catch (exc) {
                    currentUrl = 'not known';
                }

                console.info('Test "', test.fullTitle, '" failed, current URL: ', currentUrl); // eslint-disable-line no-console
                browser.saveScreenshot('./errorShots/' + browser.capabilities.browserName + '-' + browser.capabilities.version + '-' + test.fullTitle + '.png'); // eslint-disable-line prefer-template
            }
        }
    }
};

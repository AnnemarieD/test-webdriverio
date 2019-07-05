'use strict';

const assert = require('assert');

describe('web page', () => {
    it('should have the right title', () => {
        browser.url('http://www.google.nl');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Google');
    });
});

const {Builder, By, Key, until} = require('selenium-webdriver')
const assert = require('assert')
const {describe, beforeEach, afterEach, it} = require('mocha')
const testCase = require('./getphonenumber.spec.js');

it('Test case', () => {
    it('Should run the test case', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await testCase(driver);
        } finally {
            await driver.quit();
        }
    });
});

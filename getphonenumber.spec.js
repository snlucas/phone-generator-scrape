const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const {describe, beforeEach, afterEach, it} = require('mocha');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();

chromeOptions.headless = true;

describe('get-phone-number', function() {
    this.timeout(30000)
    let driver;
    let vars;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
        vars = {}
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('get-phone-number', async function() {
        await driver.get("https://4devs.net.br/geradores/gerador-numero-de-telefone/")
        console.log('>>> ', process.env.npm_config_uf);
        vars["uf"] = process.env.npm_config_uf;
        await driver.wait(until.elementLocated(By.id("estado")), 10000);
        await driver.findElement(By.id("estado")).then(async(dropdown) => {
            await dropdown.findElement(By.css(`option[value="${vars["uf"]}"]`)).click()
        });
        await driver.findElement(By.css(".bg-blue-600 > .w-6")).click()
        vars["phone"] = await driver.findElement(By.css(".lg\\3Atext-xl")).getAttribute("value")
        console.log(vars["phone"])
    });
});

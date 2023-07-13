const { By, Builder, Browser } = require('selenium-webdriver');
// const { suite } = require('selenium-webdriver/testing/index');
// const assert = require("assert");
// const { error } = require('console');

(async function () {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

        let text = await driver.findElement(By.name('my-text'));
        let btn = await driver.findElement(By.className('btn'));

        await text.sendKeys('Work!!!!');
        await btn.submit();


        // await driver.wait(until.titlesIs('Web form - target page'), 5000);

        let list = await driver.findElements(By.className('row'));
        if (list.length <= 0) {
            throw new Error('Test3 - FAIL');
        } else {
            console.log('Test - success');
        }
    } finally {
        await driver.quit();
    }



})();

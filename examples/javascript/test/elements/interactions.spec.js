const {suite} = require('selenium-webdriver/testing');
const {By, Browser} = require('selenium-webdriver');
const assert = require("node:assert");

suite(function (env) {
  describe('Element Interactions', function () {
    let driver;

    before(async function () {
      driver = await env.builder().build();
    });

    after(async () => await driver.quit());

    it('should Clear input and send keys into input field', async function () {

      try {
        await driver.get('https://www.selenium.dev/selenium/web/inputs.html');
        await driver.manage().setTimeouts({implicit: 5000});
        let inputField = await driver.findElement(By.name('no_type'));

        //Click
        let colorInp = await driver.findElement(By.name('color_input'))
        await colorInp.click()
        console.log('colorInp clicked')

        //Send keys
        await colorInp.sendKeys('#333')
        await console.log('color changed')

        //Clear
        await driver.findElement(By.name('email_input')).clear()
        await console.log('clear email input')
        await inputField.clear();
        await inputField.sendKeys('Selenium');

        //Submit
        await driver.findElement(By.name('submit_input')).submit()

        // assert.strictEqual(await inputField.getText(), "Selenium");

      } catch (err) {
        console.log('Error:' + err)
      }
    });
  });
}, { browsers: [Browser.CHROME, Browser.FIREFOX]});
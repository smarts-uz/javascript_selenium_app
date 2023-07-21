const {suite} = require('selenium-webdriver/testing');
const {By} = require('selenium-webdriver');
// const assert = require("node:assert");

suite(function (env) {
    describe('Element Information', function () {
        let driver;

        before(async function () {
            driver = await env.builder().build();
        });

        after(async () => await driver.quit());

        it('isDisplayed', async function () {

            try {
                await driver.get('https://www.selenium.dev/selenium/web/inputs.html');
                let result = await driver.findElement(By.name('email_input')).isDisplayed()
                await console.log(result)
            } catch (err) {
                console.log('Error:' + err)
            } finally {
                await console.log('end isDisabled')
            }
        });

        it('isEnabled', async function(){
            try {
                // Navigate to url
                await driver.get('https://www.selenium.dev/selenium/web/inputs.html');

                // Resolves Promise and returns boolean value
                let element =  await driver.findElement(By.name("button_input")).isEnabled();
                await console.log(element)

            } catch (e) {
                console.log('Error:' + e)
            } finally {
                await console.log('end isEnabled')
            }
        })

        it('isSelected', async function(){
            try{
                // Navigate to url
                await driver.get('https://www.selenium.dev/selenium/web/inputs.html');

                // Returns true if element ins checked else returns false
                let res = await driver.findElement(By.name("checkbox_input")).isSelected();
                await console.log(res)
            } catch (e) {
                await console.log('Error: ' + e)
            } finally {
                await console.log('end isSelected')
            }
        })

        it('Tag name', async function(){
            try{
                // Navigate to URL
                await driver.get('https://www.selenium.dev/selenium/web/inputs.html');

                // Returns TagName of the element
                let value = await driver.findElement(By.name('email_input')).getTagName();
                await console.log(value)
            } catch (e) {
                await console.log('Error: ' + e)
            } finally {
                await console.log('end TagName')
            }
        })
    });
});
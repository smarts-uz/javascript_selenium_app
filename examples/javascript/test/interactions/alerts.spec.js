import {Builder, By, until} from "selenium-webdriver";
import {suite} from 'selenium-webdriver/testing/index.js'

suite(function () {
    describe('Interactions', function () {
        let driver

        before(async function () {
            driver = await new Builder().forBrowser('chrome').build()
        })

        after(async function () {
            await driver.quit()
        })

        it('Alerts', async function () {

            await driver.get('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')
            await driver.manage().window().fullscreen()
            //Click the link to activate the alert
            await driver.findElement(By.linkText('See an example alert')).click();
            await console.log('alert was clicked')
// Wait for the alert to be displayed
            await driver.wait(until.alertIsPresent());

// Store the alert in a variable
            let alert = await driver.switchTo().alert();

//Store the alert text in a variable
            let alertText = await alert.getText();
            await console.log('alertText: ' + alertText)
//Press the OK button
            await alert.accept();
            await console.log('Alerts success')
            await console.log('=====================================')

// Note: To use await, the above code should be inside an async function


        })

        it('confirm', async function () {
            await driver.get('https://www.selenium.dev/documentation/webdriver/interactions/alerts/#confirm')
            //Click the link to activate the alert
             await driver.findElement(By.xpath(`/html/body/div/div[1]/div/main/div/p[4]/a`)).click()
            // Wait for the alert to be displayed
            await driver.wait(until.alertIsPresent());
            // Store the alert in a variable
            let alert = await driver.switchTo().alert();
            //Store the alert text in a variable
            let alertConfirm = await alert.getText();
            await console.log(alertConfirm)
            //Press the Cancel button
            await alert.dismiss();
            await console.log('Confirm success')
        })

        it('prompt', async function () {
            await driver.get('https://www.selenium.dev/documentation/webdriver/interactions/alerts/#prompt')
            //Click the link to activate the alert
            await driver.findElement(By.linkText('See a sample prompt')).click();
            // Wait for the alert to be displayed
            await driver.wait(until.alertIsPresent());
            // Store the alert in a variable
            let alert = await driver.switchTo().alert();
            //Type your message
            let getText = await alert.sendKeys("Selenium!!!");
            await console.log(getText)
            //Press the OK button
            await alert.accept();
            await console.log('Prompt success')
        })
    })
})
import {Builder} from "selenium-webdriver";
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
            await driver.get('http://example.com')

            await console.log('work')
        })
    })
})
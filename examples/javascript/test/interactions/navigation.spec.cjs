

const { Builder} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');


suite(function (){
    describe('Navigation', function (){
        let driver;
        before(async () => driver = await new Builder().forBrowser('chrome').build())

        after(async () => await driver.quit())

        it('Browser navigation', async () =>{
                try{
                    //navigate to
                    await driver.get('https://selenium.dev');
                    await console.log('navigate to selenium.dev')
                    await driver.get('https://mail.ru');
                    await console.log('navigate to mail.ru')
                    //back
                    await driver.navigate().back();
                    await console.log('navigate to back')
                    //forward
                    await driver.navigate().forward();
                    await console.log('navigate to forward')
                    //refresh
                    await driver.navigate().refresh()
                    await console.log('refresh page')
                } catch (e) {
                    console.log('Error: ' + e)
                } finally {
                    console.log('Success navigate')
                }
        }

        )
    })
})
const {Browser, By, Builder, Key, until, wait} = require("selenium-webdriver");

(async function locators() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    try {
        await driver.get('https://www.google.com/')

        //className
        let uzb = await driver.findElement(By.className('uU7dJb'))

        //css Selector
        let img = await driver.findElement(By.css('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'))

        //id
        let googleServices = await driver.findElement(By.id('SIvCob'))

        //name
        let searchInp = await driver.findElement(By.name('q'))

        //link text
        let linkText = await driver.findElement(By.linkText('O‘zbek'))

        //partial link text
        let partialLinkText = await driver.findElement(By.partialLinkText('Google Поиск'))

        //tag name
        let tagName = await driver.findElement(By.tagName('a'))

        //xpath
        let xPath = await driver.findElement(By.xpath(`/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[1]`))

        console.log( 'uzb: ' + await uzb.getText())
        console.log('img: ' + await img.getTagName())
        console.log( 'googleServices: ' + await googleServices.getText())
        console.log('linkText: ' + await linkText.getText())
        console.log('partialLinkText: ' + await partialLinkText.getText())
        console.log('tagName: ' + await tagName.getText())
        await searchInp.sendKeys('Hello world!')
        await xPath.submit()

        await driver.wait(until.titleIs('Hello world - Поиск в Google'), 4000)

        await console.log('Success')
        // let list = await driver.findElement(By.xpath(`/html/body/div[2]/section/div/div[4]/h1`))
        // if (uzb) {
        //     console.log('Full success')
        // } else {
        //     console.log('error')
        // }


    // try {
    //     await driver.get('https://www.google.com/')
    //     let searchInp = await driver.findElement(By.xpath(`//*[@id="APjFqb"]`))
    //     await searchInp.sendKeys('Laravel')
    //     await searchInp.sendKeys(Key.ENTER)
    //     await console.log('ENTER')
    //     await driver.wait(until.titleIs('Laravel - Поиск в Google'))
    //     await console.log('success - 1')
    //     let link = await driver.findElement(By.xpath(`//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/a`))
    //     link.click();
    //     await console.log('click')
    //     await driver.wait(until.titleIs('Laravel - The PHP Framework For Web Artisans'))
    //     let list = await driver.findElement(By.xpath(`/html/body/div[2]/section/div/div[4]/h1`))
    //     if (list) {
    //         console.log('Full success')
    //     } else {
    //         console.log('error')
    //     }
    } catch (e) {
        console.log('Error of catch')
        console.log(e)
    } finally {
        await driver.quit()
    }
})()





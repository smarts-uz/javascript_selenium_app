const {Browser, By, Builder} = require("selenium-webdriver");

(async function finders(){
   let driver = await new Builder().forBrowser(Browser.CHROME).build()

   try{
      await driver.get('https://www.cinerama.uz/')
      //variables
      let badge = await driver.findElement(By.className('Badge_badgeWrapper__rfuZq mt-1'))
      let cinemas = await driver.findElement(By.id('__next'))
      let nextBtn = cinemas.findElement(By.className('Slider_nextArrow__2rvTg'))
      let prevBtn = await driver.findElement(By.css('#__next .Slider_previousArrow__3N0SB'))
      // Evaluating entire DOM
      console.log('badge:' + await badge.getText())

      //Evaluating a subset of the DOM
      await nextBtn.click()
      await console.log('message: nextBtn clicked')

      //Optimized locator
      await prevBtn.click()
      await console.log('message: prevBtn clicked')

      //All matching elements
         //Get element
      let lists = await driver.findElements(By.tagName('li'));
      for (let el of lists){
         console.log('lists: ' + await el.getText())
      }

         //Find Elements From Element
      let element = driver.findElement(By.css('div'))
      let elements = await element.findElements(By.css('a'))
      for (let el of elements){
         console.log('elements:' + await el.getText())
      }

   } catch (err){
      console.log('Error:' + err)
   } finally {
      driver.quit()
   }
})()
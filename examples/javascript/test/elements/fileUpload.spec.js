const { suite } = require('selenium-webdriver/testing');
const {Browser, By, Builder} = require("selenium-webdriver");
const path = require("path");

suite(function(env) {
  describe('File Upload Test', function() {
    let driver;

    before(async function() {
      driver = await env.builder().build();
    });

    after(() => driver.quit());

    it('Should be able to upload a file successfully', async function() {
      const image = path.resolve('./test/resources/selenium-snapshot.png')

      await driver.manage().setTimeouts({implicit: 5000});

      // Navigate to URL
      await driver.get('https://www.selenium.dev/selenium/web/upload.html');
      // Upload snapshot
      await driver.findElement(By.id("upload")).sendKeys(image);

      await driver.findElement(By.id("go")).submit();

      driver.getPageSource().then(result => {
        if (result.indexOf("File Uploaded!")) {
          console.log("file upload success")
        } else {
          console.log("file upload not successful")
        }
      })


    });



  });
}, { browsers: [Browser.CHROME, Browser.FIREFOX]});
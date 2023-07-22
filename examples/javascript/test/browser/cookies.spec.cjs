const { suite } = require('selenium-webdriver/testing');
const {Browser} = require("selenium-webdriver");

suite(function(env) {
    describe('Cookies', function() {
        let driver;

        before(async function() {
            driver = await env.builder().build();
        });

        after(() => driver.quit());

        it('Create a cookie', async function() {
            await driver.get('https://www.selenium.dev/selenium/web/blank.html');
            await console.log('create cookie =============================================')
            // set a cookie on the current domain
            await driver.manage().addCookie({ name: 'key', value: 'value' });
        });

        it('Create cookies with sameSite', async function() {
            await driver.get('https://www.selenium.dev/selenium/web/blank.html');
            await console.log('Create cookies with sameSite =============================================')
            // set a cookie on the current domain with sameSite 'Strict' (or) 'Lax'
            await driver.manage().addCookie({ name: 'key1', value: 'value1', sameSite: 'Strict' });
            await driver.manage().addCookie({ name: 'key2', value: 'value2', sameSite: 'Lax' });
        });

        it('Read cookie', async function() {
            await driver.get('https://www.selenium.dev/selenium/web/blank.html');
            await console.log('Read cookie =============================')
            // set a cookie on the current domain
            await driver.manage().addCookie({ name: 'my_foo', value: 'myBar' });

            // Get cookie details with named cookie 'foo'
            await driver.manage().getCookie('my_foo').then(function(cookie) {
                console.log('cookie details => ', cookie);
            });
        });

        it('Read all cookies', async function() {
            await driver.get('https://www.selenium.dev/selenium/web/blank.html');
            await console.log('Read all cookies =============================')
            // Add few cookies
            await driver.manage().addCookie({ name: 'test11', value: 'cookie1' });
            await driver.manage().addCookie({ name: 'test22', value: 'cookie2' });

            // Get all Available cookies
            await driver.manage().getCookies().then(function(cookies) {
                console.log('cookie details => ', cookies);
            });
        });

        it('Delete a cookie', async function() {
            await driver.get('https://www.selenium.dev/selenium/web/blank.html');
            await console.log('Delete a cookie =============================')
            // Add few cookies
            await driver.manage().addCookie({ name: 'test111', value: 'cookie11' });
            await driver.manage().addCookie({ name: 'test222', value: 'cookie22' });

            // Delete a cookie with name 'test1'
            await driver.manage().deleteCookie('test111');

            // Get all Available cookies
            await driver.manage().getCookies().then(function(cookies) {
                console.log('cookie details => ', cookies);
            });
        });

        it('Delete all cookies', async function() {
            await driver.get('https://www.selenium.dev/selenium/web/blank.html');
            await console.log('Delete all cookies')
            // Add few cookies
            await driver.manage().addCookie({ name: 'test111', value: 'cookie1' });
            await driver.manage().addCookie({ name: 'test222', value: 'cookie2' });

            // Delete all cookies
            await driver.manage().deleteAllCookies();
        });

    });
}, { browsers: [Browser.CHROME, Browser.FIREFOX]});
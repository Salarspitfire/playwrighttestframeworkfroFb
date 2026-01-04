import {test, expect} from '@playwright/test';

// test.describe.configure({mode: 'serial'})
// test.use({channel:'msedge', headless: false});
// test.use({viewport: {width:1920, height:1080},});
//test.use({channel:'msedge', headless: false});
//to execute in local installed Browser 
test("piracy site for movies", async({page}) =>{
    // Launch and get the landing page url
    await page.goto("https://www.5movierulz.events/");
    console.log('openeed movierulz', await page.url());
    await page.waitForTimeout(2000);
    
    //get the current page url 
    await page.goto("https://www.facebook.com");
    console.log("navigated to ", await page.url());
    await page.waitForTimeout(2000);

    // reload the page 
    await page.reload();
    console.log("reloaded the page ", await page.url()); 
    await page.waitForTimeout(2000); 

    //go back to the page 

    await page.goBack();
    console.log("back to the main page ", await page.url());
    await page.waitForTimeout(2000);

});

test("Test 2", async({page})=>{
    await page.goto("https://myworkspace-sg1-8-ap.jpmchase.com/logon/LogonPoint/tmindex.html");
    console.log('retrieve the page title : ', await page.title());
    await page.waitForTimeout(2000);
});

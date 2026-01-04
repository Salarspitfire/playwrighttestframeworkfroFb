import {test, expect} from '@playwright/test'

// using getByRole() to locate an element

test.use({channel:'chrome',headless:false});
//test.describe.configure({mode: 'serial'});

test("getByRole()", async({page,}) =>{
    await page.goto('https://www.toolsqa.com/selenium-training/#enroll-form');
    
    // await page. waitForTimeout(5000);

    console.log("get the page title ", await page.title());

    
    await  page.getByRole('textbox',{name:'First Name (required)'}).fill('hema chandra varma');
    // await page.keyboard.press("PageUp");
    // await page.keyboard.press("PageDown");
    // For horizontal scroll: positive X value scrolls right, negative scrolls left
    // await page.mouse.wheel(200, 0);  // scroll right
    // await page.mouse.wheel(-200, 0); // scroll left
    await page.mouse.wheel(0, -200);
    await page.getByRole('textbox',{name:'Last Name'}).fill('mode');
    await page.getByRole('textbox',{name:'Email (required)'}).fill('varma.hemachandra@gmail.com');
    await page. waitForTimeout(5000);
});



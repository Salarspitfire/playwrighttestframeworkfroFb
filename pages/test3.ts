import {test, expect} from '@playwright/test';

test('aidaform', async({page}) =>{

    await page.goto("https://my.aidaform.com/signup ");
    console.log('opened aidaform sign up page', await page.title());

    await page.getByLabel('Username').fill('testvser');
    await page.getByLabel('Email').fill('movierulz@gmail.com');
    await page.waitForTimeout(5000);
    await page.getByLabel(/^Password$/).fill('mvp@9912319952');
    await page.getByLabel('Confirm password').fill('mvp@9912319952');
    //await page.getByRole('button').click();
    await page.locator('button:has-text("Create My Free Account")').click();
    console.log("home page title: ", await page.title());
});

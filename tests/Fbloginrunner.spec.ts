import {test,expect } from '@playwright/test';
import { fblogin } from '../pages/fblogin';

test("facebook login validation", async({page})=> {

    //create object to the page class 
    const fb =new fblogin(page);
    
    //calling fb login class methods for validate 
    await fb.openFacebook();

    // const title =await fb.getTitle
    const title = await fb.getTitle();
    console.log("page title", title);
    expect(title).toContain("Facebook");

    const url =await fb.getURL();
    console.log('fb url', url)
    expect(url).toContain("https://www.facebook.com");

    await fb.Uesrname("9912319952");
    await fb.passwordField("19942212");
    await fb.clikOnSignIn();

    
});



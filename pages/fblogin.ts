import { Page, Locator } from '@playwright/test';

export class fblogin{
     
    //create Object to page class 
    private page:Page;
    //Locators declaration 
    private EmailOrPhone: Locator;
    private password : Locator;
    private SignIn: Locator;
    //Constructor class
    constructor(page: Page)
    {
        this.page=page;

        //locator initialization
        this.EmailOrPhone =page.getByRole('textbox',{name: 'Email address or phone number'});
        this.password = page.getByRole('textbox', {name: 'Password'});
        this.SignIn = page.getByRole('button',{name : 'Create new account'})
    }
    //methods for operating elemnts 
    async openFacebook()
    {
        await this.page.goto("https://www.facebook.com/");
    }
    async Uesrname(EmailOrPhone: string){
        await this.EmailOrPhone.fill(EmailOrPhone);
    }
    
    async passwordField(password: string )
    {
        await this.password.fill(password);
    }

    async clikOnSignIn()
    {
        await this.SignIn.click();

    }

    async getTitle(){
       return this.page.title()
    }
    async getURL(){
       return this.page.url();
}

}

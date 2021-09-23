Feature('login');

Scenario('Yanlış kullanıcı adı', ( I ) => {
I.amOnPage('http://amazon.com');
I.waitForElement(('//div[@id="nav-signin-tooltip"]'));
I.click('//div[@id="nav-signin-tooltip"]');
I.fillFiled('//input[@id="ap_email"]','ddddd');
I.click('//input[@id="continue]');
I.seeElement("//*[contains(text(),'cannot find')]");

});

Scenario('Doğru kullanıcı adı Yanlış şifre', ( I ) => {
    I.amOnPage('http://amazon.com');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.waitForElement('//input[@id="ap_email"]');
    I.fillFiled('//input[@id="ap_email"]','dilaranuraltiparmak@gmail.com');
    I.click('//input[@id="continue]');
    I.seeElement("//*[contains(text(),'cannot find')]");
    
    });

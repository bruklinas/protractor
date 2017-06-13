// local import of the exported AngularPage class
import { AngularHomepage } from './angularPage';
import { browser } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
  describe('"Name" section', () => {
    beforeEach(() => {
      browser.driver.manage().window().maximize();
    });

    it('should greet the named user', () => {
      let angularHomepage = new AngularHomepage();
      angularHomepage.get();
      let isDisplayed = angularHomepage.isElementDisplayedById("add-some-control", "Element was found by that ID!");
      expect(isDisplayed).toBe(true);
      angularHomepage.setName('Julie');
      expect(angularHomepage.getGreeting()).toEqual("Hello Julie!");
      browser.sleep(2000);
    });

    it('should greet the named user with an updated name', () => {
      let angularHomepage = new AngularHomepage();
      angularHomepage.get();
      let isDisplayed = angularHomepage.isElementDisplayedById("add-some-control", "Element was found by that ID!");
      expect(isDisplayed).toBe(true);
      angularHomepage.setName('Aurimas');
      expect(angularHomepage.getGreeting()).toEqual('Hello Aurimas!');
      browser.sleep(2000);
    });
  });
  describe('TODO section',()=>{});
});
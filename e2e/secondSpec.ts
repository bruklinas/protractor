// local import of the exported AngularPage class
import { AngularHomepage } from './angularPage';
import { browser } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('second spec', () => {
  describe('second spec section 1', () => {
    beforeEach(() => {
      browser.driver.manage().window().maximize();
    });

    it('spec 2 should greet the named user', () => {
      let angularHomepage = new AngularHomepage();
      angularHomepage.get();
      if (angularHomepage.isElementDisplayedById("add-some-control")) {
        console.log("toks elementas rastas");
      } else {
        console.log("tokio elemento nėra");
      };
      angularHomepage.setName('Julie');
      expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
      browser.sleep(2000);
    });

    it('spec2 greet the named user with an updated name', () => {
      let angularHomepage = new AngularHomepage();
      angularHomepage.get();
      if (angularHomepage.isElementDisplayedById("add-some-control")) {
        console.log("testas2");
      } else {
        console.log("testas2");
      };
      angularHomepage.setName('Aurimas');
      expect(angularHomepage.getGreeting()).toEqual('Hello Aurimas!');
      browser.sleep(2000);
    });
  });
  describe('TODO section',()=>{});
});
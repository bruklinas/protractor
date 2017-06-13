// local import of the exported AngularPage class
import { AngularHomepage } from './angularPage';
import { browser } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('idSpec', () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
  });

  it('id add-some-control is displayed', () => {
    let angularHomepage = new AngularHomepage();
    angularHomepage.get();
    let isNotDisplayed = angularHomepage.isElementNotDisplayedById("add-some-controls", "Element was not found by that ID!");
    expect(isNotDisplayed).toBe(true);
/*      if (isDisplayed) {
        console.log("toks elementas rastas");
      } else {
        console.log("tokio elemento nėra");
      };
*/  });
});
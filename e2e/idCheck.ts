// local import of the exported AngularPage class
import { AngularHomepage } from './angularPage';
import { browser } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('second spec', () => {
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
  });
});
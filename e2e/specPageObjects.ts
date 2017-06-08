// local import of the exported AngularPage class
import {AngularHomepage} from './angularPage';
import {browser} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
  it('should greet the named user', () => {
    let angularHomepage = new AngularHomepage();
    angularHomepage.get();
    if (angularHomepage.isElementDisplayedById("manoId")) {
      console.log("toks elementas rastas");
    } else {
      console.log("tokio elemento nėra");
    };
    browser.sleep(5000);
    angularHomepage.setName('Julie');
    browser.sleep(5000);
    expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    browser.sleep(5000);
  });
});

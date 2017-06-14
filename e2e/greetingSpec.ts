// local import of the exported AngularPage class
import { AngularPage } from './angularPage';
import { browser } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
    angularHomepage.get();
  });

  let angularHomepage = new AngularPage();

  describe('"Name" section', () => {
    afterEach(() => {
      browser.sleep(1000);
      console.log("'it' block from greetingSpec successfully executed.");
    });

    afterAll(() => {
      console.log("Finished with Greeting tests!");
    });
    
    // --------------------------------   it specs block -------------------------------------------------------------------
    xit('should greet a user by an entered name Julie', () => {
      angularHomepage.setName('Julie');
      expect(angularHomepage.getGreetingHeading()).toEqual("Hello Julie!");
    });

    xit('should greet the named user with an updated name', () => {
      angularHomepage.setName('Aurimas');
      expect(angularHomepage.getGreetingHeading()).toEqual('Hello Aurimas!');
    });

    xit('should display only Hello if user name is not provided', () => {
      angularHomepage.clearName();
      expect(angularHomepage.getGreetingHeading()).toEqual('Hello !');
    });
  });
});
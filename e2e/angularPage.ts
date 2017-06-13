// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
import {browser, element, by, ExpectedConditions, promise} from 'protractor';
import {CommonFunctions} from './PageObject';

export class AngularHomepage {
  nameInput = element(by.model('yourName'));
  greeting = element(by.binding('yourName'));

  get() {
    browser.get('http://www.angularjs.org');
  }

  setName(name: string) {
    this.nameInput.clear();
    this.nameInput.sendKeys(name);
  }

  // getGreeting returns a webdriver.promise.Promise.<string>. For simplicity
  // setting the return value to any
  getGreeting(): promise.Promise<string> {
    return this.greeting.getText();
  }
}

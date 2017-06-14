// local import of the exported AngularPage class
import { AngularPage } from './angularPage';
import { CommonFunctions } from './CommonFunctions';
import { CommonVariables } from './CommonVariables';
import { browser, element, by } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('todo list block', () => {

  let angularPage = new AngularPage();

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    angularPage.get();
  });


  afterEach(() => {
    browser.sleep(2500);
    console.log("'it' block from todoSpec successfully executed.")
  });

  it('should add a todo item', () => {
    CommonFunctions.setValue(angularPage.todoInput, CommonVariables.todoItemToAddName);
    angularPage.todoInputSubmit.click();
    expect(angularPage.getTextOfSpecificTodo(2)).toBe(CommonVariables.todoItemToAddName);      
  });
});
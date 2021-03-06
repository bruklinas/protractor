// local import of the exported AngularPage class
import { AngularPage } from './angularPage';
import { CommonFunctions } from './CommonFunctions';
import { CommonVariables } from './CommonVariables';
import { browser, element, by, ExpectedConditions } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('TODO list block', () => {

  let angularPage = new AngularPage();
  let id = 1;
  
  beforeAll(() => {
    browser.driver.manage().window().maximize();
    angularPage.get();
  });


  afterEach(() => {
    console.log(id + " 'it' block from todoSpec successfully executed.");
    id++;
  });

  // --------------------------------------------- it specs -----------------------------------------------------------------------
  it('should add a todo item', () => {
    CommonFunctions.setValueWithClear(angularPage.todoInput, CommonVariables.todoItemToAddName);
    angularPage.todoInputSubmit.click();
    expect(angularPage.getTextOfSpecificTodo(2)).toBe(CommonVariables.todoItemToAddName);
  });

  it('should strikethrough completed todo item', () => {
    angularPage.checkSpecificTodoAsCompleted(2);
    expect(angularPage.getSpecificTodoElementSpan(2).getAttribute('class')).toEqual('done-true');
  });

  it('should archive completed todo items', () => {
    angularPage.archiveLink.click();
    expect(angularPage.getTodoItemsCount()).toBe(1);
    expect(angularPage.todoDefaultItem.isPresent()).toBe(true);
    expect(angularPage.todoCreatedItem.isPresent()).toBe(false);
  });
});
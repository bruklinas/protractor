// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
import { browser, element, by, ExpectedConditions, promise } from 'protractor';

export class AngularPage {
  //  --------------------------- FIELDS --------------------------------------------
  // ---------------------- Name section --------------------------------------------
  nameInput = element(by.model('yourName'));
  greetingHeading = element(by.binding('yourName'));

  // ---------------------- Todo section --------------------------------------------
  todoItemCountString = element(by.css("div[ng-controller='TodoListController as todoList'] span"));
  archiveLink = element(by.css("a[ng-click='todoList.archive()']"));
  todoInput = element(by.model('todoList.todoText'));
  todoInputSubmit = element(by.css('input.btn-primary'));
  todoList = element.all(by.repeater('todo in todoList.todos'));

  // ---------------------- Methods --------------------------------------------
  /**
   * opens up angularjs.org website
   */
  get() {
    browser.get('http://www.angularjs.org');
  }

  // ---------------------- Name related --------------------------------------------
  /**
   * sets the Name input field to a given string
   */
  setName(name: string) {
    this.nameInput.clear();
    this.nameInput.sendKeys(name);
  }

 /**
 * clears the Name input field
 */
  clearName() {
    this.nameInput.clear();
  }

  /**   
   * returns the inner text of the Greeting field
   */
  getGreetingHeading() {
    return this.greetingHeading.getText();
  }

  // ---------------------- Todo related --------------------------------------------

}

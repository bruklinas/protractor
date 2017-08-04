// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
import { browser, element, by, ExpectedConditions, promise, $ } from 'protractor';
import { CommonVariables } from './commonVariables';

export class AngularPage {
  //  --------------------------- FIELDS --------------------------------------------
  // ---------------------- Name section --------------------------------------------
  nameInput = element(by.model('yourName'));
  greetingHeading = element(by.binding('yourName'));

  // ---------------------- Todo section --------------------------------------------
  todoItemCountString = $("div[ng-controller='TodoListController as todoList'] span");
  archiveLink = $("a[ng-click='todoList.archive()']");
  todoInput = element(by.model('todoList.todoText'));
  todoInputSubmit = $('input.btn-primary');
  todoCreatedItem = element(by.repeater(CommonVariables.todoRepeater)).element(by.xpath('//span[text()="' + CommonVariables.todoItemToAddName + '"]'));
  todoDefaultItem = element(by.repeater(CommonVariables.todoRepeater)).element(by.xpath('//span[text()="' + CommonVariables.todoDefaultItem + '"]'));

  // ---------------------- Search section --------------------------------------------
  searchInput = element(by.model('projectList.search'));
  searchResults = element.all(by.repeater("project in projectList.projects | filter:projectList.search | orderBy:'name'"));
  firstSearchItem = element(by.repeater("project in projectList.projects | filter:projectList.search | orderBy:'name'").row(0));
  projectNameAnchorList = element.all(by.binding('project.name'));
  editSproutcoreProjectLink = element(by.xpath("//a[contains(@href,'/edit/4')]"));
  projectNameInput = element(by.model('editProject.project.name'));
  saveButton = element(by.buttonText('Save'));

  // ---------------------- Methods --------------------------------------------
  /**
   * opens up angularjs.org website
   */
  get() {
    browser.get('http://www.angularjs.org');
  }
  // --------------------------------------------------------------------------------
  // ---------------------- NAME related --------------------------------------------
  // --------------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------------
  // ---------------------- TODO related --------------------------------------------
  // --------------------------------------------------------------------------------
  /**
   * gets the text value of todo item with specified @param=row
   */
  getTextOfSpecificTodo(row: number) {
    let myTodo = element(by.repeater(CommonVariables.todoRepeater).row(row));
    return myTodo.$('span').getText();
  }
  /**
   * marks a specific todo item as completed
   */
  checkSpecificTodoAsCompleted(row: number) {
    let myTodo = element(by.repeater(CommonVariables.todoRepeater).row(row));
    myTodo.$("input[type='checkbox']").click();
  }

  getSpecificTodoElementSpan(row: number) {
    return element(by.repeater(CommonVariables.todoRepeater).row(row)).$('span');
  }
  /**
   * returns the amount of todo items
   */
  getTodoItemsCount() {
    return element.all(by.repeater(CommonVariables.todoRepeater)).count();
  }

  // --------------------------------------------------------------------------------
  // ---------------------- Search related --------------------------------------------
  // --------------------------------------------------------------------------------
  amountOfFoundSearchResults(): promise.Promise<number> {
    return this.projectNameAnchorList.count();      
  }
}

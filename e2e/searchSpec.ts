// local import of the exported AngularPage class
import { AngularPage } from './angularPage';
import { CommonFunctions } from './CommonFunctions';
import { CommonVariables } from './CommonVariables';
import { browser, element, by } from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Search block', () => {

  let angularPage = new AngularPage();

  beforeAll(() => {
    browser.driver.manage().window().maximize();
    angularPage.get();
  });

  // --------------------------------------------- it specs -----------------------------------------------------------------------
  it('should change the Search input value', () => {
    CommonFunctions.setValueWithClear(angularPage.searchInput, CommonVariables.searchParameter);
    expect(angularPage.searchInput.getAttribute("value")).toBe(CommonVariables.searchParameter);
    CommonFunctions.setValueWithClear(angularPage.searchInput, "");
  });

  it('should find and leave only the item that is available', () => {
    CommonFunctions.setValueWithClear(angularPage.searchInput, CommonVariables.searchParameter);
    expect(angularPage.searchResults.count()).toBe(1);
    expect(angularPage.firstSearchItem.getText()).toMatch('SproutCore');
  });

  it('should find no items with wrong search query', () => {
    CommonFunctions.setValueWithClear(angularPage.searchInput, CommonVariables.incorrectSearchParameter);
    expect(angularPage.searchResults.count()).toBe(0);
  });

  describe('project editing functionality', () => {
    it('should edit the found project by updating its name', () => {
      CommonFunctions.setValueWithClear(angularPage.searchInput, CommonVariables.searchParameter);
      expect(angularPage.searchResults.count()).toBe(1);
      expect(angularPage.firstSearchItem.getText()).toMatch('SproutCore');
      angularPage.editSproutcoreProjectLink.click().then(() => {
        CommonFunctions.setValueWithClear(angularPage.projectNameInput, CommonVariables.updatedProjectName);
        angularPage.saveButton.click();
      });
    });
/*    it('should find the project by the updated name', () => {
      CommonFunctions.setValueWithClear(angularPage.searchInput, CommonVariables.updatedProjectName);
      expect(angularPage.searchResults.count()).toBe(1);
      expect(angularPage.firstSearchItem.getText()).toMatch('SproutCore2');
    });*/
  });
});

function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { return function () { return uniqueID + j;} () } (i); 
    }
import { element, by } from 'protractor';

export class PageObject {

    isElementDisplayedById (id : string) : boolean {
        var isDisplayed : boolean = false;
        element(by.id(id)).isDisplayed().then(()=> {
                isDisplayed=true;
            }, () => {
                isDisplayed=false;
            })
        return isDisplayed;
     }
}
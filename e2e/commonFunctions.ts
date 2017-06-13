import { element, by } from 'protractor';

export class CommonFunctions {
    /**
     * Checks if elements is displayed
     */
   public static isElementDisplayedById(id: string, msg?: string): boolean {
        var isElementDisplayed: boolean = false;
        let elm = element(by.id(id));
        var resolvedProm = elm.isPresent().then;

       resolvedProm(() => {
            elm.isDisplayed().then(() => {
                console.log("Radom elementa... " + id);
                isElementDisplayed = true;
                console.log("isElementDisplayed reikšmė prieš išeinant iš IF'o: " + isElementDisplayed);
            });
        });
        console.log("isElementDisplayed reikšmė prieš grąžinant: " + isElementDisplayed);
        return isElementDisplayed;
    }

    /**
 * Checks if elements is NOT displayed
 */
   public static isElementNotDisplayedById(id: string, msg: string): boolean {
        var isElementNotDisplayed: boolean = true;
        let elm = element(by.id(id));

        elm.isPresent().then(() => {
            console.log("Radom elementa... " + id);
            isElementNotDisplayed = false;
        });

        return isElementNotDisplayed;
    }
}
import { element, by } from 'protractor';

export class PageObject {
    name = element(by.id("#id"));

    getName() {
        return this.name.getText();
    }

    firstFunction(): void {
        console.log("New function from branch 'dev' executed");
    }

    secondFunction() {
        console.log("Second function from branch 'dev' executed");
    }
}
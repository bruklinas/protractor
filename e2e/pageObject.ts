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

    thirdFunction() {
        console.log("Third function from branch 'master' executed");
    }

    localMasterFunction() : number{
        return 2;
    }
    
    remoteMasterFunction() : number{
        return 3;
    }

    devFunction() : number{
        return 1;
    }

    newMasterFunction() : number{
        return 4;
    }

    secondDevFunction() : string {
        return "Hi";
    }
}
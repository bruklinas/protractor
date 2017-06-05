import {element, by } from 'protractor';

export class PageObject{
    name = element(by.css("#id"));

    getName() {
        return this.name.getText();
    }

    newFunction() : void{
        console.log("New function from branch 'dev' executed");
    }
}
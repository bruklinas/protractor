import {element, by } from 'protractor';

export class PageObject{
    name = element(by.css("#id"));

    getName: any = () => {
        return this.name.getText();
    }
}
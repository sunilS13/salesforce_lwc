import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("child component called")
    }
    connectedCallback(){
        console.log("connectedCallback child")
    }
    renderedCallback(){
        console.log("renderedCallback called child")
    }
}
import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("parent component called")
    }
    connectedCallback(){
        console.log("connectedCallback")
    }
    renderedCallback(){
        console.log("renderedCallback called")
    }
}
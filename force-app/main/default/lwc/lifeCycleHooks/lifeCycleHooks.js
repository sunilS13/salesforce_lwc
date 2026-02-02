import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LifeCycleHooks extends LightningElement {

    name = 'Sunil';

    constructor() {
        super();
        console.log('Constructor Called');
    }

    connectedCallback() {
        console.log('Connected Callback Called');
    }

    renderedCallback() {
        console.log('Rendered Callback Called');
    }

    disconnectedCallback() {
        console.log('Disconnected Callback Called');
    }

    changeName() {
        this.name = 'Sai Sunil Kumar'
    }

}
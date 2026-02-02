import { LightningElement } from 'lwc';

export default class CustomEventsChild extends LightningElement {
    name;

    sendevent() {
        this.name = 'sunil'
        const Event = new CustomEvent('sendname', {
            detail: {
                username: this.name,
                userdob: '13-03-2002'
            }
        });

        this.dispatchEvent(Event);
    }
}
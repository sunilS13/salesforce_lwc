import { LightningElement } from 'lwc';

export default class CustomEventsParent extends LightningElement {
    userfirstname;
    userdob;
    hasdetails = false;
    handleGetName(event) {
        const { username, userdob } = event.detail;
        this.userfirstname = username;
        this.userdob = userdob;
        this.hasdetails = true;
        console.log(this.userfirstname);
        console.log(userdob);
    }
}
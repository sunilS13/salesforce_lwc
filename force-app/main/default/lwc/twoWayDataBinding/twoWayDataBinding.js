import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    memberNumber;
    updateMemberNumber(event){
        this.memberNumber = event.target.value;  
    }
    
}
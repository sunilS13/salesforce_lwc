import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CASE_NUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
import CASE_STATUS_FIELD from '@salesforce/schema/Case.Status';

export default class UiRecord1 extends LightningElement {
    @api recordId;
    fields = [CASE_NUMBER_FIELD, CASE_STATUS_FIELD];

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' }) CaseVar;

    get casenumber() {
        return getFieldValue(this.CaseVar.data, CASE_NUMBER_FIELD);
    }

    get casestatus() {
        return getFieldValue(this.CaseVar.data, CASE_STATUS_FIELD);
    }
}

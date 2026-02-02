import { LightningElement ,api} from 'lwc';

export default class P2cChild extends LightningElement {
    @api firstname
    @api number1
    @api isvalid
}
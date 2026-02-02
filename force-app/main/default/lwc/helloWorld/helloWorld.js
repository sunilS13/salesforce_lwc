import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="zero to hero"
    title="aura"
    
    inputtyped(event){
        this.title = event.target.value
    }

    @track address={
        city:"kld",
        phone:12345
    }
    citychange(event){
        this.address.city=event.target.value
    }
}
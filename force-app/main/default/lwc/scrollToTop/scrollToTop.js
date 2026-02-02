import { LightningElement } from 'lwc';

export default class ScrollToTop extends LightningElement {

    handleScrollClick(){
       const topDiv = this.template.querySelector('[data-id="redDiv"]');
       if(topDiv){
        topDiv.scrollIntoView({behavior: "smooth", block: "start"});
       }
   }

}
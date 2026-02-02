import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { IsConsoleNavigation, getFocusedTabInfo } from 'lightning/platformWorkspaceApi';

export default class FocusedUrlExample extends NavigationMixin(LightningElement) {
  @wire(IsConsoleNavigation) isConsoleNavigation;
  renderedCallback() {
    this.handleGetUrl();
  }

 async getFocusedTabRelativeUrl() {
        
        const focusedTab = await getFocusedTabInfo();

        // 🔑 NavigationMixin used here
        return await this[NavigationMixin.GenerateUrl](
            focusedTab.pageReference
        );
        
    }
    async handleGetUrl() {
        const url = await this.getFocusedTabRelativeUrl();
        console.log('Focused tab relative URL:', url);
        
    }
}
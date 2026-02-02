import { LightningElement } from 'lwc';
import USER_INFO from '@salesforce/user/Id';
import hasPermission from "@salesforce/userPermission/ViewSetup";

export default class ImportUserInfo extends LightningElement {
    currentUserId = USER_INFO;

    get hasViewSetupPermission() {
        console.log('hasPermission', hasPermission);
        return hasPermission;
    }
}
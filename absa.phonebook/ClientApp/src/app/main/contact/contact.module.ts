import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { SharedModule } from 'app/shared/shared.module';

import { NgxMaskModule } from 'ngx-mask';

import { ContactComponent } from './contact.component';

const routes = [
    {
        path     : 'contact',
        component: ContactComponent
    }
];

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        
        NgxMaskModule,

        FuseSharedModule,
        SharedModule
    ],
    exports     : [
        ContactComponent
    ]
})

export class ContactModule
{
}

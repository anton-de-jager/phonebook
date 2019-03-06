import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ProfileComponent } from './profile.component';

const routes = [
    {
        path     : 'profile',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    exports     : [
        ProfileComponent
    ]
})

export class ProfileModule
{
}

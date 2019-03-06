import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards/auth.guard';
import { Role } from 'app/main/authentication/_models/role';

import { FuseSharedModule } from '@fuse/shared.module';

import { AdminComponent } from './admin.component';

const routes = [
    {
        path     : 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard], 
        data: { roles: [Role.Admin] } 
    }
];

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    exports     : [
        AdminComponent
    ]
})

export class AdminModule
{
}

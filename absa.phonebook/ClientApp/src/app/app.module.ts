import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { SharedModule } from 'app/shared/shared.module';

//AUTHENTICATION//
import { LoginModule } from 'app/main/authentication/login/login.module';
import { ForgotPasswordModule } from 'app/main/authentication/forgot-password/forgot-password.module';
import { ProfileModule } from 'app/main/authentication/profile/profile.module';
//AUTHENTICATION//

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { HomeModule } from 'app/main/home/home.module';
import { ContactModule } from 'app/main/contact/contact.module';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'login'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        SharedModule,

        //AUTHENTICATION//
        LoginModule,
        ForgotPasswordModule,
        ProfileModule,
        //AUTHENTICATION//

        // App modules
        LayoutModule,
        HomeModule,
        ContactModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}

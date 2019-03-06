import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service'

@Component({
    selector   : 'admin',
    templateUrl: './admin.component.html',
    styleUrls  : ['./admin.component.scss']
})
export class AdminComponent implements OnInit
{
    env = environment;

    constructor(
        private _fuseSplashScreenService: FuseSplashScreenService
    )
    {
    }

    ngOnInit()
    {
        // this._fuseSplashScreenService.show();

        // setTimeout(() => {
        //     this._fuseSplashScreenService.hide();
        // }, 3000);
    }
}

import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector   : 'profile',
    templateUrl: './profile.component.html',
    styleUrls  : ['./profile.component.scss']
})
export class ProfileComponent
{
    env = environment;

    constructor(private router: Router)
    {
        if(!environment.logged){
            this.router.navigate(['login']);
        }
    }
}

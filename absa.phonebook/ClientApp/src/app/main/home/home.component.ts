import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector   : 'home',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss']
})
export class HomeComponent
{
    env = environment;
    
    constructor(private router: Router)
    {
        if(!environment.logged){
            this.router.navigate(['login']);
        }
    }
}

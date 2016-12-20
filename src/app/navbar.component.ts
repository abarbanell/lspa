import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  providers: [ AuthService ] 
})
export class NavbarComponent implements OnInit {
    userName: string;
    isLoggedin = false;

    constructor(private _authService : AuthService){
    }

    ngOnInit() {
        this.isLoggedin = this._authService.isLoggedin;
        if (this.isLoggedin) {
                this.userName = this._authService.userName;
        } else { 
            this.userName = "<None>";
        }
    }
}
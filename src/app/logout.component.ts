import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Component({
    template: `
        <div class="alert alert-info">
            LogoutComponent found
        </div>
        <div>
        <button 
          type="button" 
          class="btn btn-danger"
          (click)="logout()">Logout</button>
        </div>
    `
})
export class LogoutComponent{
 isLoggedin: Boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {
    this.isLoggedin = this._authService.isLoggedin;
  }

  logout(){
    this.isLoggedin = false;
    this._authService.logout();
    console.log("logged out");
    // navigate to home page
    this._router.navigate(['']);
  }
}
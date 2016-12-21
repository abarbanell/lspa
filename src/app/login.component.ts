import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    template: `
        <div class="alert alert-info">
            LoginComponent found - logged in = {{ isLoggedin }}
        </div>
        <div>
        <button 
          type="button" 
          class="btn btn-primary"
          (click)="login()">Login</button>
        </div>
    `
})
export class LoginComponent{
  isLoggedin: Boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {
    this.isLoggedin = this._authService.isLoggedin;
  }

  login(){
    this.isLoggedin = this._authService.login("username", "password");
    console.log("logged in");
    // navigate to home page
    this._router.navigate(['']);
  }
}
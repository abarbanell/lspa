import { Component, OnInit } from '@angular/core';
import { AuthService, ISession } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

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
export class LoginComponent implements OnInit {
  isLoggedin: Boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {
    this._authService.status().subscribe(session => {
      this.isLoggedin = session.isLoggedin;
      console.log('LoginComponent: received update for user: ' + session.userName);
    });
  }
  
  login() {
    if (this.isLoggedin) {
      console.log("already logged in");
      // navigate to home page
      this._router.navigate(['logout']);
    } else {
      this._authService.login("Johnny Doey", "password");
      console.log("now logged in");
      // navigate to home page
      this._router.navigate(['']);
    }
  }
}
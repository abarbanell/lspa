import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AuthService, ISession } from './auth.service';

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  isLoggedin: Boolean = false;
  userNameValue: string;
  passwordValue: string;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {
    this._authService.status().subscribe(session => {
      this.isLoggedin = session.isLoggedin;
      this.userNameValue = session.userName;
      console.log('LoginComponent: received update for user: ' + session.userName);
    });
  }
  
  login() {
    if (this.isLoggedin) {
      console.log("already logged in");
      // navigate to home page
      this._router.navigate(['logout']);
    } else {
      this._authService.login(this.userNameValue, this.passwordValue);
      console.log("now logged in");
      // navigate to home page
      this._router.navigate(['']);
    }
  }

  changeUserName(x: FormControl) {
    console.log(x);
    this.userNameValue = x.value;
  }

  changePassword(x: FormControl) {
    console.log(x);
    this.passwordValue = x.value;
  }
}
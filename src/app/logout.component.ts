import { Component, OnInit } from '@angular/core';
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
export class LogoutComponent implements OnInit {
  isLoggedin: Boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {
    this._authService.status().subscribe(session => {
      this.isLoggedin = session.isLoggedin;
      console.log('LogoutComponent: received update for user: ' + session.userName);
    });
  }

  logout() {
    if (this.isLoggedin) {
      this._authService.logout();
      console.log("now logged out");
    } else {
      console.log("already logged out");
    }
    // navigate to home page
    this._router.navigate(['']);
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService, ISession } from './auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isLoggedin: Boolean = false;
  userName: string = "not set";

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    console.log('NavbarCompnent.ngOnInit() called.');
    this._authService.status().subscribe(session => {
      this.isLoggedin = session.isLoggedin;
      this.userName = session.userName;
      console.log('NavbarComponent: received update for user: ' + session.userName);
    });
  }
}
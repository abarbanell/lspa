import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedin: Boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {
    this._authService.status().subscribe(session => {
      this.isLoggedin = session.isLoggedin;
    });
  }
  canActivate() {
    if (this.isLoggedin)
      return true;
    this._router.navigate(['login']);
    return false;
  }
}
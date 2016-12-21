import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private _authservice: AuthService, private _router: Router){

  }
  canActivate() {
    if (this._authservice.isLoggedin) 
      return true;
    this._router.navigate(['login']);
    return false;
  }
}
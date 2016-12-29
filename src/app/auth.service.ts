import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  private _session = {
    isLoggedin: false,
    userName: ""
  }

  login(username: string, password: string) {
    console.log('TODO: auth.login() - should be after form submit');
    this._session.isLoggedin = true;
    return this._session.isLoggedin;
  }

  logout() {
    console.log('auth.logout()');
    this._session.isLoggedin = false;
  }

  session() : Observable<ISession>{
    return Observable.from([this._session])
  }

  isLoggedin() {
    return this._session.isLoggedin;
  }
}

export interface ISession {
  isLoggedin: boolean,
  userName: String
}
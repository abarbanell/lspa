import { Injectable } from '@angular/core'; 
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private _session = {
    isLoggedin: false,
    userName: "<initializing>"
  }
  private _subj: Subject<ISession>;

  constructor() {
    this._subj = new BehaviorSubject<ISession>(this._session);
    this._subj.next(this._session);
  }

  login(userName: string, password: string) {
    console.log('auth.login()');
    this._session.isLoggedin = true;
    this._session.userName = userName;
    this._subj.next(this._session);
    console.log('emitted session login for ' + this._session.userName);
  }

  logout() {
    console.log('auth.logout()');
    this._session.isLoggedin = false;
    this._session.userName = "";
    this._subj.next(this._session);
    console.log('emitted session logout for ' + this._session.userName);
  }

  status() : Observable<ISession>{
    return this._subj;
  }
}

export interface ISession {
  isLoggedin: boolean,
  userName: string
}
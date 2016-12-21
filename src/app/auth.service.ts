import { Injectable } from '@angular/core'; 

@Injectable()
export class AuthService {
  isLoggedin = false;
  userName: string;

  login(username: string, password: string) {
    console.log('TODO: auth.login() - should be after form submit');
    this.isLoggedin = true;
    return this.isLoggedin;
  }

  logout() {
    console.log('auth.logout()');
    this.isLoggedin = false;
  }

}
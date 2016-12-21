import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  providers: [ AuthService ] 
})
export class NavbarComponent {
    authService: AuthService;

    constructor(authService : AuthService){
        this.authService = authService;
  }
}
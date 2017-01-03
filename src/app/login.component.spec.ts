import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard.service';
import { DirtyCheckGuard } from './dirty-check.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(() => {
    let authServiceStub = {
      login(username: string, password: string) {
        return true;
      },
      logout() {
      },
      isLoggedin() {
        return true;
      }
    }
    TestBed.configureTestingModule({ 
        declarations: [ LoginComponent ],
        providers: [ 
          { provide: AuthService, useValue: authServiceStub },
          AuthGuard,
          DirtyCheckGuard ],
        imports: [ RouterTestingModule, FormsModule ]
      });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create AppComponent');
  });

  it ('should have login status', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let auth = TestBed.get(AuthService);
    let loginRC = auth.login("user", "password");
    let loginStatus = auth.isLoggedin();
    expect(loginRC).toBe(true);
    expect(loginStatus).toBe(true);
  });

  it ('should have login button', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let btn = fixture.debugElement.query(By.css(".btn"))
    let el = btn.nativeElement
    expect(el.textContent).toContain("Login");
  });
});

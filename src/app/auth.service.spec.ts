import { Observable } from 'rxjs/Rx';
import { ISession } from './auth.service';

// service test should be standalone without testbed
import { AuthService } from './auth.service';
describe('AuthService', () => {
  it ('true should be true', () => {
    // let fixture = TestBed.createComponent(AppComponent);
    expect(true).toBe(true, 'should be true');
  });

  it ('status() should return observable', () => {
    let fixture = new AuthService();
    let obs = fixture.status();
    expect(obs instanceof Observable).toBe(true);
  });

  it ('login() should create observable event', (done) => {
    let fixture = new AuthService();
    let obs = fixture.status();
    let cnt = 0;
    expect(obs instanceof Observable).toBe(true);
    obs.subscribe(x => {
      // console.log(x);
      cnt++;
      switch (cnt) {
        case 1: // initial status
          expect(x.isLoggedin).toBe(false);
          break;
        case 2: // login() 
          expect(x.isLoggedin).toBe(true);
          expect(x.userName).toBe('user');
          done();
          break;
        case 3: // logout()
          expect(x.isLoggedin).toBe(false);
          done();
          break;
        default: // should not happen
          console.log('error with message: ', cnt);
          expect(false).toBe(true);
          done();
      }
    });
    // now create login and logout events.
    // Ther always is an initial event as well 
    fixture.login('user','password'); 
    fixture.logout();
  });
});

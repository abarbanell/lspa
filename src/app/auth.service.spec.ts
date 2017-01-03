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
});

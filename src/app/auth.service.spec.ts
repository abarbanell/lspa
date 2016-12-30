// service test should be standalone without testbed
import { AuthService } from './auth.service';
describe('AuthService', () => {
  it ('should work', () => {
    // let fixture = TestBed.createComponent(AppComponent);
    expect(true).toBe(true, 'should be true');
  });
});

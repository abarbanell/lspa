

// service test should be standalone without testbed
import { ConfigService } from './config.service';
describe('ConfigService', () => {
  it ('true should be true', () => {
    // let fixture = TestBed.createComponent(AppComponent);
    expect(true).toBe(true, 'should be true');
  });

  it ('set() and get() should return value', () => {
    let fixture = new ConfigService();
    let k = "url";
    let v = "http://localhost:5000"

    fixture.set(k, v);
    expect (fixture.get(k)).toEqual(v);
  });
  it ('set() and delete and get() should return no value', () => {
    let fixture = new ConfigService();
    let k = "url";
    let v = "http://localhost:5000"

    fixture.set(k, v);
    fixture.delete(k);
    expect (fixture.get(k)).toBeUndefined();
  });

});

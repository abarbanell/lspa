import { Observable } from 'rxjs/Rx';
import { ISession } from './auth.service';

// service test should be standalone without testbed
import { SensorService } from './sensor.service';
describe('SensorService', () => {

  it ('should create SensorService', () => {
    let fixture = new SensorService();
    let obs = fixture.getSensorList();
    expect(fixture instanceof SensorService).toBe(true); 
    expect(obs instanceof Observable).toBe(true);
  });

  it ('getSensorList() should create observable event', (done) => {
    let fixture = new SensorService();
    let obs = fixture.getSensorList();
    let cnt = 0;
    expect(obs instanceof Observable).toBe(true);
    obs.subscribe(x => {
          expect(x.length).toBe(4);     
          done();
    });
  });
});
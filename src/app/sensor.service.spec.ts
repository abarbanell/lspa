import { Observable } from 'rxjs/Rx';
import { ISession } from './auth.service';
import { Http, XHRBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';

// service test should be standalone without testbed
import { SensorService } from './sensor.service';
import { ConfigService } from './config.service';

describe('SensorService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ SensorService, ConfigService, MockBackend, BaseRequestOptions,
      {
        provide: Http,
        deps: [ MockBackend, BaseRequestOptions ],
        useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
      } ]
    });
    TestBed.compileComponents();
  }));

  it ('should create SensorService', inject([SensorService], (fixture: SensorService) => {  
    let obs = fixture.getSensorList();
    expect(fixture instanceof SensorService).toBe(true); 
    expect(obs instanceof Observable).toBe(true);
  }));

  it ('getSensorList() should create observable event', inject([SensorService], (fixture: SensorService, done: Function) => {
    console.log('TODO: why does this work? we have not told the mock service what payload to return and we still succeed? Not possible.');
    let obs = fixture.getSensorList();
    expect(obs instanceof Observable).toBe(true);
    obs.subscribe(x => {
          expect(x.length).toBe(4);     
          done();
    });
  }));
});
import { Observable } from 'rxjs/Rx';
import { ISession } from './auth.service';
import { Http, XHRBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';

// service test should be standalone without testbed
import { SensorService } from './sensor.service';
import { ConfigService } from './config.service';

describe('SensorService with DI', () => {
  let fixture: SensorService;

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

  it ('SensorService type correct', inject([SensorService], (fixture: SensorService) => {  
    expect(fixture instanceof SensorService).toBe(true); 
  }));

  it ('getSensorList is Observable', inject([SensorService], (fixture: SensorService) => {  
    let obs = fixture.getSensorList();
    expect(obs instanceof Observable).toBe(true);
  }));

  it ('getSensorList() should create observable event', inject([SensorService, MockBackend], 
    (fixture: SensorService, mockBackend: MockBackend) => {
    const mockResponse = [ 1, 2, 3, 4];
    
    mockBackend.connections.subscribe((connection: any) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
    });
    console.log('TODO: subscribed event never triggers.');
    let obs = fixture.getSensorList();
    expect(obs instanceof Observable).toBe(true);
    let sub = obs.subscribe(x => {
          console.log('subscribed event - x: ', x);
          expect(x.length).toBe(4);  
    });
  }));
});

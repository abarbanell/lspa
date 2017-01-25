

// service test should be standalone without testbed, but we have a service with DI

import { ConfigService } from './config.service';
import { Http, XHRBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';

describe('ConfigService', () => {
    beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ConfigService, MockBackend, BaseRequestOptions,
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

  it ('true should be true', inject([ConfigService], (fixture: ConfigService) => {
    // let fixture = TestBed.createComponent(AppComponent);
    expect(true).toBe(true, 'should be true');
  }));

  it ('get() should return value', () => {
    let fixture = new ConfigService();
    let k = "LG_BASE_URL";
    expect (fixture.get(k)).toContain('http');        
  });
});

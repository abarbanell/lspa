import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Http, XHRBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MigService } from './mig.service';
import { ConfigService } from './config.service';

describe('MigService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ MigService, ConfigService, MockBackend, BaseRequestOptions,    
        {
        provide: Http,
        deps: [ MockBackend, BaseRequestOptions ],
        useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
      } ]
    })
    .compileComponents();    
  }));

  it('fixture type correct', inject([MigService], (fixture: MigService) => {
    expect(fixture instanceof MigService).toBe(true);
  }));

})
import { Observable } from 'rxjs/Rx';
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http, XHRBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MigService } from './mig.service';
import { ConfigService } from './config.service';

describe('MigService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MigService, ConfigService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }]
    })
      .compileComponents();
  }));

  it('fixture type correct', inject([MigService], (fixture: MigService) => {
    expect(fixture instanceof MigService).toBe(true);
  }));

  it('getData is Observable', inject([MigService], (fixture: MigService) => {
    let obs = fixture.getData();
    expect(obs instanceof Observable).toBe(true);
  }));

  it('getData() should create observable event', inject([MigService, MockBackend],
    (fixture: MigService, mockBackend: MockBackend) => {
      const mockResponse = [
        {
          "_id": "58504d6948e01100073bec93",
          "temperature": 24.4,
          "soil": 367,
          "humidity": 33.2,
          "host": "rpi02",
          "timestamp": "2016-12-13T19:35:03.895033",
          "sensor": [
            "soil",
            "humidity",
            "temperature"
          ]
        },
        {
          "_id": "58504d8f48e01100073bec94",
          "host": "ESP_CBBAAB",
          "sensor": [
            "capacitance",
            "temperature",
            "light"
          ],
          "capacitance": 975,
          "temperature": 23,
          "light": 13877
        },
        {
          "_id": "58504e9748e01100073bec95",
          "temperature": 24.4,
          "soil": 367,
          "humidity": 32.9,
          "host": "rpi02",
          "timestamp": "2016-12-13T19:40:06.523466",
          "sensor": [
            "soil",
            "humidity",
            "temperature"
          ]
        },
        {
          "_id": "58504ec048e01100073bec96",
          "host": "ESP_CBBAAB",
          "sensor": [
            "capacitance",
            "temperature",
            "light"
          ],
          "capacitance": 971,
          "temperature": 23,
          "light": 13837
        }
      ];

      mockBackend.connections.subscribe((connection: any) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      let obs = fixture.getData();
      expect(obs instanceof Observable).toBe(true);
      let sub = obs.subscribe(x => {
        // console.log('subscribed event - x: ', x);
        expect(x.length).toBe(4);
      });
    }));
})


// service test should be standalone without testbed, but we have a service with potential future dependencies via DI

import { ConfigService } from './config.service';
import { TestBed, inject, async } from '@angular/core/testing';

describe('ConfigService', () => {
    beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ConfigService ]
    });
    TestBed.compileComponents();
  }));

  it ('Configservice type is correct', inject([ConfigService], (fixture: ConfigService) => {
    // let fixture = TestBed.createComponent(AppComponent);
    expect(fixture instanceof ConfigService).toBe(true);
  }));

  it ('get() should return value', () => {
    let fixture = new ConfigService();
    let k = "LG_BASE_URL";
    expect (fixture.get(k)).toContain('http');        
  });
});

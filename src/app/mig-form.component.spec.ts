import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MigFormComponent } from './mig-form.component';
import { SpinnerComponent } from './spinner.component';
import { MigService } from './mig.service';

describe ('MigFormComponent', () => {

  let comp: MigFormComponent;
  let fixture: ComponentFixture<MigFormComponent>;


  let migServiceStub = {
    getData() {
      return Observable.of([
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
      ])     
    } 
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigFormComponent, SpinnerComponent ], // declare the test component
      providers: [ { provide: MigService, useValue: migServiceStub } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigFormComponent);

    comp = fixture.componentInstance; // BannerComponent test 
    

  }));

  it('comp type is correct', () => {
    expect(comp instanceof MigFormComponent).toBe(true);
  })
  
  it('panel title correct', () => {
            // query for the title <h1> by CSS element selector
    let de = fixture.debugElement.query(By.css('.panel-title'));
    let el = de.nativeElement;
    expect(el.textContent).toContain('Sensor Data Migration Form');
  })

  it('initial data empty', ()=> {
    let comp = fixture.componentInstance;
    
    expect(comp.data.length).toBe(0);
    expect(comp.errorMsg).toBeNull();
    expect(comp.isLoading).toBe(false);
  })

  it('load function', inject([MigService],
    (fixture: MigService) => {
      let obs = fixture.getData();
      expect(obs instanceof Observable).toBe(true);
      let sub = obs.subscribe(x => {
        // console.log('subscribed event - x: ', x);
        expect(x.length).toBe(4);
      });
    }));
})
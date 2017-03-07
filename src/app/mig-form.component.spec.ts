import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { MigFormComponent } from './mig-form.component';
import { MigService } from './mig.service';

describe ('MigFormComponent', () => {

  let comp: MigFormComponent;
  let fixture: ComponentFixture<MigFormComponent>;


  let migServiceStub = {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigFormComponent ], // declare the test component
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
})
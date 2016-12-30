import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar.component";

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
        declarations: [AppComponent, NavbarComponent ],
        imports: [ RouterTestingModule ]
      });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});


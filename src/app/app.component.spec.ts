import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar.component";
import { AuthService } from './auth.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
        declarations: [AppComponent, NavbarComponent ],
        imports: [ RouterTestingModule, FormsModule  ],
        providers: [ AuthService ]
      });
  });
  it ('should instantiate', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(true).toBe(true);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});


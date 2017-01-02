import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { LoginComponent } from './login.component';

// make sure that you can only go to a page if you are logged in.

@Injectable()
export class DirtyCheckGuard implements CanDeactivate<IFormComponent> {
  isLoggedin: Boolean = false;

  canDeactivate(component: IFormComponent) {
    if (component.hasUnsavedChanges()) {
      console.log('dirty');
      return confirm ("are you sure");
    }
    console.log('clean');
    return true;
  }
}

export interface IFormComponent {
  hasUnsavedChanges(): boolean;
}
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { SensorListComponent } from './sensorList.component';
import { ContactComponent } from './contact.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { NotFoundComponent } from './not-found.component';
import { SpinnerComponent } from './spinner.component';
import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard.service';
import { DirtyCheckGuard } from './dirty-check.service';
import { SensorService } from './sensor.service';
import { HttpModule} from '@angular/http';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    routing   
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SensorListComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    SpinnerComponent
  ],
  providers: [ 
    AuthService, 
    AuthGuard, 
    DirtyCheckGuard,
    SensorService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


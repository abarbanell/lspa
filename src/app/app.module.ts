import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { SensorListComponent } from './sensorList.component';
import { ContactComponent } from './contact.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { NotFoundComponent } from './not-found.component';
import { SpinnerComponent } from './spinner.component';
import { MigFormComponent } from './mig-form.component';
import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard.service';
import { DirtyCheckGuard } from './dirty-check.service';
import { SensorService } from './sensor.service';
import { MigService } from './mig.service';


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
    SpinnerComponent,
    MigFormComponent
  ],
  providers: [ 
    AuthService, 
    AuthGuard,
    ConfigService, 
    DirtyCheckGuard,
    SensorService,
    MigService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


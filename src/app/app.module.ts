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
import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard.service';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
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
    NotFoundComponent
  ],
  providers: [ AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


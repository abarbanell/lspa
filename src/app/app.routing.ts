import { Router, RouterModule } from '@angular/router';

import { NotFoundComponent} from './not-found.component';
import { HomeComponent} from './home.component';
import { SensorListComponent} from './sensorList.component';
import { ContactComponent} from './contact.component';
import { LoginComponent} from './login.component';
import { LogoutComponent} from './logout.component';
import { AuthGuard } from './auth.guard.service';


export const routing = RouterModule.forRoot( 
  [
    { path: '', component: HomeComponent },
    { 
      path: 'sensors', 
      component: SensorListComponent,
      canActivate: [ AuthGuard ]
    },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', component: NotFoundComponent }
  ]
);
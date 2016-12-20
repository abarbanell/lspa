import { Router, RouterModule } from '@angular/router';

import { NotFoundComponent} from './not-found.component';
import { SensorListComponent} from './sensorList.component';

export const routing = RouterModule.forRoot( 
  [
    { path: 'sensors', component: SensorListComponent },
    { path: '**', component: NotFoundComponent }
  ]
);
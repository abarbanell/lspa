import { Injectable } from '@angular/core'; 
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SensorService {

  getSensorList() {
    const sl: ISensor[] = [
      { id: 's1', type: 'temp', status: 'active', host: ''},
      { id: 's2', type: 'hum', status: 'active', host: ''},
      { id: 's3', type: 'light', status: 'active', host: ''},
      { id: 's4', type: 'soil', status: 'active', host: ''}
    ];
    return Observable.from([sl]);
  }

}

export interface ISensor {
  id: string;
  type: string;
  status: string;
  host: string;
}

export interface IHost {
  id: string;
  type: string;
  IP: string;
}
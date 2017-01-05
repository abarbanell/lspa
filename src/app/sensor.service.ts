import { Injectable } from '@angular/core'; 
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

// current api from limitless-garden: 
// https://lg.dokku.abarbanell.de/api/sensor/rpi02/soil
//
// return: 
// [{"soil":367,"host":"rpi02","date":"2016-12-13T19:35:05.000Z"},
// {"soil":367,"host":"rpi02","date":"2016-12-13T19:40:07.000Z"}]
//

@Injectable()
export class SensorService {
  constructor(private _http: Http) {

  }

  getSensorListMock() {
    const sl: ISensor[] = [
      { soil: 327, host: 'rpi01', date: '2016-12-13T19:35:05.000Z'},
      { soil: 345, host: 'rpi02', date: '2016-12-13T19:40:05.000Z'},
      { id: 's3', type: 'light', light: 1002, host: 'rpi02', date: '2016-12-13T19:45:05.000Z'},
      { id: 's4', type: 'soil', hum: 23, host: 'rpi01', date: '2016-12-13T19:50:05.000Z'}
    ];
    return Observable.of(sl);
  }

  getSensorList() {
    return this._http.get('https://lg.dokku.abarbanell.de/api/sensor/rpi02/soil')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `Could not retrieve server Data: ${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}

// TODO: this is not clean... we need to have a better API response from the server
export interface ISensor {
  id?: string;
  type?: string;
  soil?: number;
  light?: number;
  hum?: number;
  host: string;
  date: string
}

export interface IHost {
  id: string;
  type: string;
  IP: string;
}
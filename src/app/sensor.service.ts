import { Injectable } from '@angular/core'; 
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class SensorService {
  constructor(private _http: Http) {

  }

  getSensorList() {
    var headers = new Headers({
      // "access-control-request-method": "GET"
    });
    var options= new RequestOptions({
      headers: headers,
      search: "user_key=0796c5f4eec581e715e5ace51f090d8b"
    });
    return this._http.get('https://lg.dokku.abarbanell.de/api/sensors', options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  saveSensor(s: ISensor) {
       var headers = new Headers({
      // "access-control-request-method": "POST"
    });
    var options= new RequestOptions({
      headers: headers,
      search: "user_key=0796c5f4eec581e715e5ace51f090d8b"
    });
    return this._http.post('https://lg.dokku.abarbanell.de/api/sensors', s, options)
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

// Below is copy and paste from the server part
// our payload data model: 
interface SensorPayload {
  name: string,
  host: string,
  type: {
    name: string,
    uom?: string,
    min?: number,
    max?: number,
    tolerance?: number
  }
}

// exposed interface 
export interface ISensor extends SensorPayload {
  _id?: string
}


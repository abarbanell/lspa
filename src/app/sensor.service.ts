import { Injectable } from '@angular/core'; 
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from './config.service';

@Injectable()
export class SensorService {
  private _user_key: string;
  private _baseurl: string;

  constructor(private _http: Http, private _conf: ConfigService) {
    this._user_key = this._conf.get("THREESCALE_PROVIDER_KEY");
    this._baseurl = this._conf.get("LG_BASE_URL");
  }

  getSensorList() {
    var headers = new Headers({
      // "access-control-request-method": "GET"
    });
    var options= new RequestOptions({
      headers: headers,
      search: "user_key=" + this._user_key
    });
    return this._http.get(this._baseurl + '/api/sensors', options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  saveSensor(s: ISensor) {
    var headers = new Headers({
      // "access-control-request-method": "POST"
    });
    var options= new RequestOptions({
      headers: headers,
      search: "user_key=" + this._user_key
    });
    return this._http.post(this._baseurl + '/api/sensors', s, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteSensor(id: string) {
    var url = this._baseurl + '/api/sensors/' + id;
    var headers = new Headers({
      // "access-control-request-method": "POST"
    });
    var options= new RequestOptions({
      headers: headers,
      search: "user_key=" + this._user_key
    });
    return this._http.delete(url, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSensorID(host: string, sensor: string) {
    return "58504d6948e01100073bec93"
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


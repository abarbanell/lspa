import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from './config.service';

@Injectable()
export class MigService {
  private _user_key: string;
  private _baseurl: string;

  constructor(private _http: Http, private _conf: ConfigService) {
    this._user_key = this._conf.get("THREESCALE_PROVIDER_KEY");
    this._baseurl = this._conf.get("LG_BASE_URL");
  }

  getData() {
    var headers = new Headers({
      // "access-control-request-method": "GET"
    });
    var options = new RequestOptions({
      headers: headers,
      search: "user_key=" + this._user_key
    });
    return this._http.get(this._baseurl + '/api/collections/sensor', options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
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
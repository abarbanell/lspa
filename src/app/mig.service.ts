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

}
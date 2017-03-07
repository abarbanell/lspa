import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  private _env  = {
      // these credentials are not super secure, they get exposed in the Angular app at runtime anyway.
      // do not put passwords here!
      "THREESCALE_PROVIDER_KEY": "0796c5f4eec581e715e5ace51f090d8b", // this key is production, but rate limited
      "LG_BASE_URL": "https://lg.dokku.abarbanell.de"
  };

  get(key: string): string {
      console.log('retrieve key: ', key, ', value: ', this._env[key])
      return this._env[key];
  }
}

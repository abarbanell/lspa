import { Injectable } from '@angular/core';

// config service: now everything with debug dummies and localhost.

@Injectable()
export class ConfigService {
  private _env = {};

  get(key: string): string {
      return this._env[key];
  }

  delete(key: string) {
      delete this._env[key];
  }

  set(key: string, value: string) {
      this._env[key] = value;
  }
}

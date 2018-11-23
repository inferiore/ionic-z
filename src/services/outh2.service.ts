import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class Outh2Service {

  
  // Extending the HttpClient through the Angular DI.
  public constructor(private _storage:Storage) {
    // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
    // for ex. this.httpClient.http.get(...)
  } 

  public GetToken() {
    return Observable.fromPromise(this._storage.get('token'));
  }
  public GetOauth2Credencial(){
      return Observable.fromPromise(this._storage.get('OuthCredencial'));
  }

}
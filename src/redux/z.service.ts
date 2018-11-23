import { Injectable } from '@angular/core';
import { ZeusHttpClient } from '../services/zeusHttpClient';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class SyncService {

  
  constructor(private http: ZeusHttpClient) {
  
  }


//consultar conceptos! 
  public consultar(op:string="CUSTOMERS"):Observable<any> {
    return this.http.Get('/api/sync?op='+op).map((response) => {
      return response;
    })
      .catch((err) => {
        throw Observable.throw(err);
      });
  }
  
}

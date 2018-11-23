import { Injectable } from '@angular/core';
// import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

import {Observable} from "rxjs";
import {ZeusHttpClient}from "../services/zeusHttpClient";
import { Storage } from '@ionic/storage';
import {OuthCredencial} from "../models/OuthCredencial";
import {Outh2Service} from "../services/outh2.service";
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {

  // private endPoint: string = 'https://jsonplaceholder.typicode.com/users/1';
  private endPoint: string = '/connect/userinfo';
  private config:OuthCredencial={clientId:"",grantType:"",scope:""};
  constructor(private http: ZeusHttpClient,private _storage:Storage,private _outh:Outh2Service) {
   
  }

  public info():Observable<any> {
      return this.http.Get(this.endPoint).map(
        (response) => {     
          console.log(response);
          return response;
        }
      )
        .catch((err) => {      
          debugger;  
          throw Observable.throw(err);        
        })
  }

  public token(email:string, password:string):Observable<any> {
   return this._outh.GetOauth2Credencial().flatMap( OuthCredencial	 => {
    this.config=OuthCredencial;
    let body = `username=${email}&password=${password}&scope=${this.config.scope}&client_id=${this.config.clientId}&grant_type=${this.config.grantType}`;
    var httpOptions=
      { 
          headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          'Accept':'application/json'
        })
      };
    return this.http.Post<any>("/connect/token",body,httpOptions)
      .map(
          (response) => {     
            this._storage.set("token",response);             
          }
        ).catch((err) => {      
          throw Observable.throw(err.error.error);        
        })
    })
  }
  
  public list():Observable<any> {
    return this.http.Get('/api/users').map(
      (response) => {     
        // console.log(response);
        return response;
      }
    )
      .catch((err) => {      
        debugger;  
        throw Observable.throw(err);        
      })
  }
  public getByLogin(login:string):Observable<any> {
    return this.http.Get('/api/users/'+login).map(
      (response) => {     
        // console.log(response);
        return response;
      }
    )
      .catch((err) => {      
        debugger;  
        throw Observable.throw(err);        
      })
  }
  public localLogin(username:string ,password:string ):Observable<User> {
    return  Observable.fromPromise(this._storage.get("local_user")
    .then(user  =>
        {
          console.log(user);
          if(user==null){
            throw new Error('Usuario no entontrado');
          }
          if(user.username==username && user.password==password){
            return user
          }
          throw new Error('Usuario no entontrado');
          
        } 
       ));
      }
}


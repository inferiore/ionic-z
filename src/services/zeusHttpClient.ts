import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import { RequestOptionsArgs } from '@angular/http';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

export function applicationHttpClientCreator(http: HttpClient, storage:Storage) {
  return new ZeusHttpClient(http,storage);
}

@Injectable()
export class ZeusHttpClient {

  private api = 'https://localhost:5001';
  // private options:RequestOptions;
  //take by https://angular.io/guide/http
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept':'application/json'
      
    })
  };
  // Extending the HttpClient through the Angular DI.
  public constructor(public http: HttpClient,private _storage:Storage) {
    // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
    // for ex. this.httpClient.http.get(...)
    
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Get<T>(endPoint: string, options: IRequestOptions=this.httpOptions): Observable<any> {
    //  return this.GetToken().flatMap( token	 => {
    //     options.headers.append("Authorization"," Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlMGVmYTE0Y2FjOWFiZjZjNjUxMDQ4MjczYmRjNzk5IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NDA5MTY2NjUsImV4cCI6MTU0MDkxNzU2NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6WyJodHRwczovL2xvY2FsaG9zdDo1MDAxL3Jlc291cmNlcyIsIldlYkFQSSJdLCJjbGllbnRfaWQiOiJEZXZlbG9wbWVudCIsInN1YiI6Ijk1YjFkNmVkLTZiNzktNGI0OC04YjRhLTYyOWNiZDFmNWYyOCIsImF1dGhfdGltZSI6MTU0MDkxNjY2NSwiaWRwIjoibG9jYWwiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJyb2xlcyIsIldlYkFQSSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.wgTRGSfB2zSWYxOvq7RYrv8O55OkWVnunD-KCozqXfVmPuk6ZkgbKChegXGhBTxrYfHxzMRvoDFizCRJKnsObSiHU3cnVKsvV6N5cp72C7NzH97tw3IuX7X4hw90T6Yg_814DBJhklodhg9NrBAFqjXMHQzl5mPjJkoTMwPn9NH5pNugDSbox8GBu0TY6VS2WX7U3SKoJ918K_J_C9NtI8fWlxupq_5BmrX4VVh987OzuvV6R0PNdSu5PRQoIUYLLAshVJKMhgEk-LUVR-Yc4h0wLuW_MIPzlEgHqa5cc5smPoZr-dd31f-xq_N70fLkuRiTJBT6MJ9cft3z5DRmvw")
    //     console.log("the token is:",token.access_token)
    //     console.log("Headers", options.headers)
        return this.http.get<T>(this.api + endPoint,options);
      // });
   
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(this.api + endPoint, params, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(this.api + endPoint, params, options);
  }
  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(this.api + endPoint, options);
  }
  

}
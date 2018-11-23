import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Outh2Service } from '../services/outh2.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: Outh2Service) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.auth.GetToken().mergeMap(token=>{
        if(token){
            request = request.clone({
                setHeaders: {
                Authorization: `Bearer ${token.access_token}`
                }
            });
        }
          return next.handle(request);

    })
    
  }
}
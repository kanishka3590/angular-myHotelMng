import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  //to check the valid token
  constructor(private _injector:Injector) { }
  intercept(req,next){
    let authSrv=this._injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders:{
        'x-access-token':`${authSrv.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }


}


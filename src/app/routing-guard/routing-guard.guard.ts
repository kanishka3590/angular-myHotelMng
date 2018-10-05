import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoutingGuardGuard implements CanActivate {
  //to guard front end route
  constructor(private _auth:AuthService,private _router:Router){}
  canActivate():boolean{
    if (this._auth.logedIn()){
    return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
}
}

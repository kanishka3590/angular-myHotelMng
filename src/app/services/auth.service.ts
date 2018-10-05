import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import * as CONFIG from '../config/app.properties'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //mapping url to node url.
  private loginUrl= `http://${CONFIG.ENV.serverIp}:${CONFIG.ENV.port}/login`;
  private registerUrl=`http://${CONFIG.ENV.serverIp}:${CONFIG.ENV.port}/register`;
  constructor(private http:HttpClient,private _router:Router) { }
  login(user){
   return  this.http.post<any>(this.loginUrl,user);
  }
  register(user){
    return this.http.post<any>(this.registerUrl,user);
  }
  //check user is loged in or not.
  logedIn(){
    return !!localStorage.getItem('token');
    //same.we want boolean return value.
    // if(localStorage.getItem('token')){
    //   return true;
    // }else{
    //   return false;
    // }
  }
  logedOutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
  getToken(){
    return localStorage.getItem('token');
  }

}

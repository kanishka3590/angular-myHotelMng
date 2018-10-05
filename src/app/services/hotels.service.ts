import { Injectable } from '@angular/core';
//building module already present.
import {HttpClient } from '@angular/common/http';
import * as CONFIG from '../config/app.properties'

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  //node server url here
  // private hotelUrl= `http://localhost:3000/hotels`;
  private hotelUrl= `http://${CONFIG.ENV.serverIp}:${CONFIG.ENV.port}/hotels`;
  hotels =[{},{},{},{},{},{}];


  constructor(private http:HttpClient) { 

  }
  getHotels(){
    return this.http.get(this.hotelUrl);
  }
  getHotelsByFilter(offset:number,count:number){
    return this.http.get(this.hotelUrl+"?offset="+offset+"&count="+count);
  }
  getOneHotel(hotelId){
    return this.http.get(this.hotelUrl+"/"+hotelId);
  }
}

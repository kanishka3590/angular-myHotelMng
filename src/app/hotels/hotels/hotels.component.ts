import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels ;
  private offset:number =0;
  private count:number =5;
  hotelLength =0;
  constructor(private hotelSrv:HotelsService) { 
    //this.hotels = hotelSrv.hotels;
  }

//by dafault angular initialize this function automatically,project start
  ngOnInit() {
    this.hotelSrv.getHotels().subscribe(
      (res)=>{
        console.log(res);
        this.hotels = res;
        
    },(err)=>{
      console.log(err);
      
    });
  }

  //get hotels by filter.5 records everytime.
  getHotelsByFilter(offset:number,count:number){
    this.offset=offset;
    this.count=count;
    if(this.offset>=0){
      this.hotelSrv.getHotelsByFilter(offset,count)
    .subscribe(
      (res:any)=>{
        console.log(res);
        if(res.length>0)
            this.hotels = res;
        else
          offset=0;
    },(err)=>{
      console.log(err);
      
    });
    }else{
      this.offset=0;
      this.count=6;
    }

    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.component.html',
  styleUrls: ['./hotels-details.component.css']
})
export class HotelsDetailsComponent implements OnInit {
  hotelId;
  constructor(private routes:ActivatedRoute,private hotelSrv:HotelsService) { }


  ngOnInit() {
    this.routes.paramMap.subscribe((params)=>{
      console.log(params.get('hotelId'));
      
    })
    this.hotelId.getOneHotel(this.hotelId)
    .subscribe(
      (res)=>{
        console.log(res);
        
      }
    )
  }

}

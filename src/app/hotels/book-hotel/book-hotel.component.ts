import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';


@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.css']
})
export class BookHotelComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  change=true;
  properties={
    bgcolor:"yellow",
    color:"green"
  }
  courses=["ABD","NBS"];
  choose="check2";
  myCourse=[{
    name:"ABC",
    topic:["ABC1","ABC2","ABC3"]
  },
  {
    name:"BCD",
    topic:["ABC1","ABC2","ABC3"]
  },
  {
    name:"DEF",
    topic:["ABC1","ABC2","ABC3"]
  }]
  constructor() { }

  ngOnInit() {}
    changeBtn(){
      this.change= !this.change;
    }
  
  funCheck1(){
    this.choose="check1";
  }
  funCheck2(){
    this.choose="check2";
  }
  funCheck3(){
    this.choose="check3";
  }
}

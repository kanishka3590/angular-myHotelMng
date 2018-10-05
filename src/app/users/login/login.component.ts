import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {  };
  constructor(private auth:AuthService,private router:Router) { }
  error;
  ngOnInit() {
  }
  login(){
    
      this.auth.login(this.user).subscribe(
        (res)=>{
        console.log(res); 
        //just to navigate to other page after login successfull.
        if(res.payload.auth==true){
          //for storing token.
          localStorage.setItem('token',res.payload.token);
          this.router.navigate(['/hotels'])
        }
      
    },(err)=>{
      console.log(err);
      //just to access error message to show on web page by html page.
        this.error=err.error.payload.message;
      
      
    })
    
  }
}

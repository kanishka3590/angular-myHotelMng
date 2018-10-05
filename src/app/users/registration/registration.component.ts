import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  error;
  ngOnInit() {
  }
  users = {
  };
  register(){
    console.log(this.users);
  //  if(this.users.pwd!=this.users.cnfpwd) 
  this.auth.register(this.users)
  .subscribe(
    (res)=>{
      console.log(res);
      //just to navigate to other link after registration is successfull.
      if(res.payload.auth==true){
        localStorage.setItem('token',res.payload.token);
        this.router.navigate(['/hotels']);
      }
      
    },
    (err)=>{
      console.log(err);
      this.error=err.error.payload.message;;
      
    }
  )
}
}

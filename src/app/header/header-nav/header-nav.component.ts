import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(public _authSrv:AuthService) { }

  ngOnInit() {
  }
  userLogout(){
    this._authSrv.logedOutUser();
  }
}

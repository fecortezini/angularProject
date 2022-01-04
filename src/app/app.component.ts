import { AuthenticationService } from './services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto';

  constructor(public auth: AuthenticationService){}

  ngOnInit(){


  }
  onLogout(){
    this.auth.logout();
  }

}

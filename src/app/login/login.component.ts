import { Router } from '@angular/router';
import { Accounts } from './../models/account';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser = localStorage.getItem('currentUser')

  dataLogin!: Accounts;

  constructor(
    private authService: AuthenticationService,
    private router: Router
    )
    {
      // if(this.authService.isLoggedIn()){
      //   this.router.navigate(['home'])
      // }
      // if(this.authService.isLoggedIn()){
      //   this.router.navigate(['catalogo'])
      // }
    }

  ngOnInit(){
    this.dataLogin = new Accounts();
  }
  logar():void {
    //this.authService.autenticar(this.dataLogin);
    this.authService.login(this.dataLogin)
  }

}

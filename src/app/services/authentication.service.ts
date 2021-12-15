import { AlertService } from './alert.service';
import { Accounts } from './../models/account';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  isAuthenticated = false;
  user = {};
  token = "Bearer ";

  constructor(
    private router: Router,
    private getAcc: ApiService,
    private alert: AlertService
  ) { }

  ngOnInit(){

  }

  registrar(data: Accounts){
    this.getAcc.registerUser(data)
    .subscribe(
      () => {
        console.log("Cadastrado");
        this.isAuthenticated = true;
        this.router.navigate(['home']);
        console.log("Connected");
      },
      httpError => {
        this.isAuthenticated = false;
        this.alert.error(httpError.error.msg)
      }
    );
  }


  autenticar(dataLogin: Accounts){
    this.getAcc.authUser(dataLogin).subscribe(
      (data: any) => {
        localStorage.setItem('currentUser', JSON.stringify(data.body));
        this.isAuthenticated = true;
        this.router.navigate(['home']);
        console.log('Connected');
      },
      httpError => {
        this.isAuthenticated = false;
        this.alert.error(httpError.error.msg)
      }
    );
  }



  public logOut(){
    if(this.isAuthenticated) {
      localStorage.removeItem('currentUser');
      this.isAuthenticated = false;
      console.log('Disconnected');
    }
  }
  isLoggedIn():boolean{
    var user = localStorage.getItem('currentUser');
    if(user){
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }


}

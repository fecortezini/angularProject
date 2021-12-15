import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Accounts } from './../models/account';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
//import * as moment from "moment";
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  constructor(
    private router: Router,
    private getAcc: ApiService,
    private alert: AlertService,
    private http: HttpClient
  ) { }

  ngOnInit(){
  }

  registrar(data: Accounts){
    this.getAcc.registerUser(data)
    .subscribe(
      () => {
        console.log("Cadastrado");
        this.router.navigate(['login']);
      },
      httpError => {
        this.alert.error(httpError.error.msg)
      }
    );
  }

  login(data: Accounts) {
    return this.http.post<Accounts>(`${environment.api}/users/auth`, data, {observe: 'response'})
    .subscribe(
      (data: any) => {
        //console.log(data);
        this.setSession(data.body)
        this.router.navigate(['home'])
      },
      httpError => {
        this.alert.error(httpError.error.msg)
      }
    );
  }

  private setSession(data: any){
    localStorage.setItem('token', data.token)
  }

  getExpiration(token: string): Date{
    const decoded: any = jwt_decode(token);

    if(decoded.exp === undefined){
      return new Date(0);
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp)
    return date;
  }

  isTokenExpired(token: string): boolean{
    if(!token){
      return true;
    }

    const date = this.getExpiration(token);
    if(date === undefined){
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLogged():boolean {
    const token = localStorage.getItem('token');
    if(!token){
      return false;
    } else if(this.isTokenExpired(token)){
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem("token");
  }

}

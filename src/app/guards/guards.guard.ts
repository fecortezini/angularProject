import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class AuthsGuard implements CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.auth.isUserLogged()){
      return true;
    }
    this.router.navigate(['']);
    return false;
  }

}

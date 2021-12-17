import { environment } from '../../environments/environment';
import { Accounts } from '../models/account';
import { SignInData } from '../models/signinData';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Accounts[]>{
    return this.http.get<Accounts[]>(`${environment.api}/users`)
  }

  deleteUser(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${environment.api}/users/${id}`, {observe: 'response'})
  }

  authUser(dataLogin: Accounts): Observable<HttpResponse<any>>{
    return this.http.post<Accounts>(`${environment.api}/users/auth`,
     dataLogin, {observe: 'response'})
  }

  registerUser(data: Accounts): Observable<HttpResponse<any>>{
    return this.http.post<Accounts>(`${environment.api}/users`,
    data, {observe: 'response'})
  }

}

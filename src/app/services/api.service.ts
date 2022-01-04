import { Content } from './../models/content';
import { environment } from '../../environments/environment';
import { Accounts } from '../models/account';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiCat = "http://localhost:3500/catalog";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Accounts[]>{
    return this.http.get<Accounts[]>(`${environment.api}/users`)
  }

  getUser(id: number): Observable<Accounts>{
    return this.http.get<Accounts>(`${environment.api}/users/${id}`)
  }

  updateUser(data: Accounts): Observable<HttpResponse<any>>{
    return this.http.put<Accounts>(`${environment.api}/users/${data.id}`, data, {observe: 'response'})
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

  getCatalog(): Observable<Content[]>{
    return this.http.get<Content[]>(`${this.apiCat}`);
  }

  addContent(data: FormData): Observable<HttpResponse<any>>{
    return this.http.post<FormData>(`${this.apiCat}/addContent`,
    data, {observe: 'response'})
  }

  updateContent(formData: FormData, id: number): Observable<HttpResponse<any>>{
    return this.http.put<FormData>(`${this.apiCat}/update/${id}`,
    formData, {observe: 'response'})
  }

  deleteContent(id: string): Observable<HttpResponse<any>>{
    return this.http.delete(`${this.apiCat}/delete/${id}`, {observe:'response'});
  }

  // getContentOnCatalog(title: string): Observable<Content>{
  //   return this.http.get<Content>(`${this.apiCat}/`);
  // }

}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient;
  private jwt: JwtHelperService = new JwtHelperService();

  constructor(http: HttpClient) { 
    this.http = http;
    

  }

  authenticate(credenciais: Credenciais): Observable<HttpResponse<any>>{
    return this.http.post(`${API_CONFIG.baseUrl}/login`, credenciais,{
      observe: "response",
      responseType: "text"
    });
  }
  setToken(token: string | undefined): boolean {
    let flag = false;
    if(token != undefined) {
        localStorage.setItem("token", token);
        flag = true;
    }
    return flag;
  }
  isAuthenticated(): boolean {
    let flag: boolean = false; 
    let token: string | null = localStorage.getItem("token");
    if(token != null) {
      flag =  !this.jwt.isTokenExpired(token);
    }
    return flag;
  }
  logout(): void {
    localStorage.clear();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
    findAll(): Observable<Registro[]>{
      return this.http.get<Registro[]>(`${API_CONFIG.baseUrl}/service/agendamentos/registros`);

    }
}

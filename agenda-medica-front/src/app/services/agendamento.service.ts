import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {


  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    
  }
    findAll(): Observable<Agendamento[]> {
      return this.http.get<Agendamento[]>(`${API_CONFIG.baseUrl}/service/agendamentos`);
    }  
  }


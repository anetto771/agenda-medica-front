import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Medico } from '../models/medico';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Medico[]>{
    return this.http.get<Medico[]>(`${API_CONFIG.baseUrl}/service/medicos`);
  }
  findById(id: number): Observable<Medico>{
    return this.http.get<Medico>(`${API_CONFIG.baseUrl}/service/medicos/${id}`);
  }
  insert(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${API_CONFIG.baseUrl}/service/medicos`, medico);
  }
  remove(id: number): Observable<Medico> {
    return this.http.delete<Medico>(`${API_CONFIG.baseUrl}/service/medicos/${id}`);
  }
  update(medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${API_CONFIG.baseUrl}/service/medicos/${medico.id}`, medico);
  }
}

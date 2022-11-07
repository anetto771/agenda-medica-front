import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Paciente } from '../models/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${API_CONFIG.baseUrl}/service/pacientes`);
  }
  findById(id: number): Observable<Paciente>{
    return this.http.get<Paciente>(`${API_CONFIG.baseUrl}/service/pacientes/${id}`);
  }
  insert(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${API_CONFIG.baseUrl}/service/pacientes`, paciente);
  }
  remove(id: number): Observable<Paciente> {
    return this.http.delete<Paciente>(`${API_CONFIG.baseUrl}/service/pacientes/${id}`);
  }
  update(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${API_CONFIG.baseUrl}/service/pacientes/${paciente.id}`, paciente);
  }
}

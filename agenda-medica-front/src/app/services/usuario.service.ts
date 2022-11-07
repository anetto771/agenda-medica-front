import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/service/usuarios`);
  }
  findById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/service/usuarios/${id}`);
  }
  insert(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${API_CONFIG.baseUrl}/service/usuarios`, usuario);
  }
  remove(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${API_CONFIG.baseUrl}/service/usuarios/${id}`);
  }
  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${API_CONFIG.baseUrl}/service/usuarios/${usuario.id}`, usuario);
  }
}

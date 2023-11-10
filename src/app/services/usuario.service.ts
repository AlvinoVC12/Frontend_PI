import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiBase = 'http://localhost:8091'

  constructor(private http:HttpClient) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.apiBase + "/usuario/lista")
  }

  saveUsuario(bean:Usuario) {
    return this.http.post<Usuario>(this.apiBase + "/usuario/registrar", bean)
  }

  updateUsuario(bean:Usuario) {
    return this.http.put<Usuario>(this.apiBase + "/usuario/actualizar", bean)
  }

  deleteUsuario(cod:number) {
    return this.http.delete(this.apiBase + "/usuario/eliminar/" + cod)
  }

  getConsultaUsuario(codigo:number) {
    return this.http.get<Usuario>(this.apiBase + "/usuario/buscar/" + codigo)
  }
}
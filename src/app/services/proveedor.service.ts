import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../modelo/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private apiBase = 'http://localhost:8091'

  constructor(private http:HttpClient) { }

  getProveedores() {
    return this.http.get<Proveedor[]>(this.apiBase + "/proveedor/lista")
  }

  saveProveedor(bean:Proveedor) {
    return this.http.post<Proveedor>(this.apiBase + "/proveedor/registrar", bean)
  }

  updateProveedor(bean:Proveedor) {
    return this.http.put<Proveedor>(this.apiBase + "/proveedor/actualizar", bean)
  }

  deleteProveedor(cod:number) {
    return this.http.delete(this.apiBase + "/proveedor/eliminar/" + cod)
  }

  getConsultaProveedor(codigo:number) {
    return this.http.get<Proveedor>(this.apiBase + "/proveedor/buscar/" + codigo)
  }
}
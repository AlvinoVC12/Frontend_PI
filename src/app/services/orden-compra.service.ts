import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdenCompra } from '../modelo/OrdenCompra';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraService {

  private apiBase = 'http://localhost:8091'

  constructor(private http:HttpClient) { }

  getOrdenCompras() {
    return this.http.get<OrdenCompra[]>(this.apiBase + "/orden-compra/lista")
  }

  saveOrdenCompra(bean:OrdenCompra) {
    return this.http.post<OrdenCompra>(this.apiBase + "/orden-compra/registrar", bean)
  }

  updateOrdenCompra(bean:OrdenCompra) {
    return this.http.put<OrdenCompra>(this.apiBase + "/orden-compra/actualizar", bean)
  }

  deleteOrdenCompra(cod:number) {
    return this.http.delete(this.apiBase + "/orden-compra/eliminar/" + cod)
  }

  getConsultaOrdenCompra(codigo:number) {
    return this.http.get<OrdenCompra>(this.apiBase + "/orden-compra/buscar/" + codigo)
  }
}
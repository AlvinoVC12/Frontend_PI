import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdenCompraDetalle } from '../modelo/OrdenCompraDetalle';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraDetalleService {

  private apiBase = 'http://localhost:8091'

  constructor(private http:HttpClient) { }

  getOrdenComprasDetalles() {
    return this.http.get<OrdenCompraDetalle[]>(this.apiBase + "/orden-compra-detalle/lista")
  }

  saveOrdenCompraDetalle(bean:OrdenCompraDetalle) {
    return this.http.post<OrdenCompraDetalle>(this.apiBase + "/orden-compra-detalle/registrar", bean)
  }

  updateOrdenCompraDetalle(bean:OrdenCompraDetalle) {
    return this.http.put<OrdenCompraDetalle>(this.apiBase + "/orden-compra-detalle/actualizar", bean)
  }

  deleteOrdenCompraDetalle(cod:number) {
    return this.http.delete(this.apiBase + "/orden-compra-detalle/eliminar/" + cod)
  }

  getConsultaOrdenCompraDetalle(codigo:number) {
    return this.http.get<OrdenCompraDetalle>(this.apiBase + "/orden-compra-detalle/buscar/" + codigo)
  }}

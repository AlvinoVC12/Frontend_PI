import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiBase = 'http://localhost:8091'

  constructor(private http:HttpClient) { }

  getProductos() {
    return this.http.get<Producto[]>(this.apiBase + "/producto/lista")
  }

  saveProducto(bean:Producto) {
    return this.http.post<Producto>(this.apiBase + "/producto/registrar", bean)
  }

  updateProducto(bean:Producto) {
    return this.http.put<Producto>(this.apiBase + "/producto/actualizar", bean)
  }

  deleteProducto(cod:number) {
    return this.http.delete(this.apiBase + "/producto/eliminar/" + cod)
  }

  getConsultaProducto(codigo:number) {
    return this.http.get<Producto>(this.apiBase + "/producto/buscar/" + codigo)
  }
}
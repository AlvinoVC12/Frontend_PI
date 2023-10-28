import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiBase = 'http://localhost:8091'

  constructor(private http:HttpClient) { }

  getCategorias() {
    return this.http.get<Categoria[]>(this.apiBase + "/categoria/lista")
  }
}

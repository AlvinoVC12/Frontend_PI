import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/services/producto.service';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import Swal from 'sweetalert2';

export interface UserData {
  id: string;
  nombre: string;
  precio: DoubleRange;
  stock: Int16Array;
  categoria: string;
  "":String;
}



@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent {
  listaProductos:Producto[] = []

  constructor(private api:ProductoService, private router:Router) {}

  ngOnInit():void {
    this.api.getProductos().subscribe(data => {
      this.listaProductos = data
    })
  }
  editar(codPro:number) {
    this.router.navigate(['producto/editar/', codPro])
  }
  eliminar(codPro:number) {

    Swal.fire({
      title: '¿Desea eliminar?',
      text: "Los cambios no se van a revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimina',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.deleteProducto(codPro).subscribe(data => {
          this.router.navigate([''])
        });
      }
    })





  }
}
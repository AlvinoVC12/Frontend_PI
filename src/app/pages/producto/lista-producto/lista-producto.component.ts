import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/services/producto.service';

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
    this.api.deleteProducto(codPro).subscribe(data => {
      this.router.navigate([''])
    })
  }
}
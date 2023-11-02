import { Component } from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-compra.service';

@Component({
  selector: 'app-lista-orden-compra',
  templateUrl: './lista-orden-compra.component.html',
  styleUrls: ['./lista-orden-compra.component.css']
})
export class ListaOrdenCompraComponent {
  listaProductos:Producto[]=[]

  constructor(private api:OrdenCompraService, private router:Router) {}

  editar(codPro:number) {
    this.router.navigate(['proveedor/editar/', codPro])
  }
  eliminar(codPro:number) {
    this.api.deleteOrdenCompra(codPro).subscribe(data => {
      this.router.navigate([''])
    })
  }
}

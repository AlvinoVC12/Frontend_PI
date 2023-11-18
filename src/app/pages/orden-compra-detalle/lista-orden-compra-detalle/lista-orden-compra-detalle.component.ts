import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompraDetalle } from 'src/app/modelo/OrdenCompraDetalle';
import { OrdenCompraDetalleService } from 'src/app/services/orden-compra-detalle.service';

@Component({
  selector: 'app-lista-orden-compra-detalle',
  templateUrl: './lista-orden-compra-detalle.component.html',
  styleUrls: ['./lista-orden-compra-detalle.component.css']
})
export class ListaOrdenCompraDetalleComponent {
  listaOrdenDetalle:OrdenCompraDetalle[]=[]

  constructor(private api:OrdenCompraDetalleService, private router:Router) {}

  ngOnInit():void {
    this.api.getOrdenComprasDetalles().subscribe(data => {
    this.listaOrdenDetalle = data
    })
  }
}

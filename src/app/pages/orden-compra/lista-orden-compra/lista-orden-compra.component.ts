import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-compra.service';
import { OrdenCompra } from 'src/app/modelo/OrdenCompra';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-orden-compra',
  templateUrl: './lista-orden-compra.component.html',
  styleUrls: ['./lista-orden-compra.component.css']
})
export class ListaOrdenCompraComponent {
  listaOrden:OrdenCompra[]=[]

  constructor(private api:OrdenCompraService, private router:Router) {}

  ngOnInit():void {
    this.api.getOrdenCompras().subscribe(data => {
    this.listaOrden = data
    })
  }
  editar(codOrd:number) {
    this.router.navigate(['', codOrd])
  }
  nuevaOrden(codOrd:number){
    this.router.navigate(['agregar-orden-compra']); 
  }
  
  eliminar(codOrd:number) {

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
        this.api.deleteOrdenCompra(codOrd).subscribe(data => {
                    window.location.reload();       

          //this.router.navigate(['lista-proveedor'])
        });
      }
    })

   



  }
}

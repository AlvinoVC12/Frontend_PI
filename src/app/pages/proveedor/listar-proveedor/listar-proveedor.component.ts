import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent {
  listaProveedores:Proveedor[] = []

  constructor(private api:ProveedorService, private router:Router) {}

  ngOnInit():void {
    this.api.getProveedores().subscribe(data => {
      this.listaProveedores = data
    })
  }
  editar(codProve:number) {
    this.router.navigate(['proveedor/editar/', codProve])
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
        this.api.deleteProveedor(codPro).subscribe(data => {
                    window.location.reload();       

          //this.router.navigate(['lista-proveedor'])
        });
      }
    })





  }
}
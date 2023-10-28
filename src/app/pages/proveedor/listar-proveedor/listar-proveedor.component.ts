import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

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
  editar(codPro:number) {
    this.router.navigate(['proveedor/editar/', codPro])
  }
  eliminar(codPro:number) {
    this.api.deleteProveedor(codPro).subscribe(data => {
      this.router.navigate([''])
    })
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompra } from 'src/app/modelo/OrdenCompra';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { OrdenCompraService } from 'src/app/services/orden-compra.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-orden-compra',
  templateUrl: './agregar-orden-compra.component.html',
  styleUrls: ['./agregar-orden-compra.component.css']
})
export class AgregarOrdenCompraComponent {
  codigo:number
  fecha:Date
  proveedor:Proveedor
  codProveedor:number

  listaProveedor:Proveedor[]=[]

  constructor(private apiProv:ProveedorService, private apiOrden:OrdenCompraService,private ruta:Router){}

  ngOnInit(){
    this.apiProv.getProveedores().subscribe(response=>{
      this.listaProveedor=response
    })
  }

  grabarDatos(){
    this.proveedor=new Proveedor(this.codProveedor,"","",0, new Date())
    var objProv= new OrdenCompra(0,this.fecha,this.proveedor)
    this.apiOrden.saveOrdenCompra(objProv).subscribe(response=>{
      Swal.fire({
        text: "Registro Exitoso",
        icon: 'success',
        confirmButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
          
          this.ruta.navigate(["lista-orden-compra"])
        }
      })
    })

  }

}

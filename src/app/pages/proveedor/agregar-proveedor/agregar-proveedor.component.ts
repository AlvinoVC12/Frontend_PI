import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-Proveedor',
  templateUrl: './agregar-Proveedor.component.html',
  styleUrls: ['./agregar-Proveedor.component.css']
})

export class AgregarProveedorComponent {
  codigo:number
  nombre:string
  direccion:string
  contacto:number
  fechaRegistro:Date
  

  constructor(private apiPro:ProveedorService, private ruta:Router){}


  grabarDatos(){
    var objPro=new Proveedor(0,this.nombre,this.direccion,this.contacto,this.fechaRegistro)
    this.apiPro.saveProveedor(objPro).subscribe(response=>{
      Swal.fire({
        text: "Registro Exitoso",
        icon: 'success',
        confirmButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
          
          this.ruta.navigate(["lista-producto"])
        }
      })
    })
  }


}
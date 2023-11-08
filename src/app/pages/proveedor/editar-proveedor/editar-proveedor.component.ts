import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Proveedor } from "src/app/modelo/Proveedor";
import { ProveedorService } from "src/app/services/proveedor.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-editar-proveedor', // Selector del componente
    templateUrl: './editar-proveedor.component.html', // Ruta al archivo HTML del componente
    styleUrls: ['./editar-proveedor.component.css'] // Rutas a los archivos de estilo del componente
  })

export class EditarProveedorComponent{

    proveedor:Proveedor
    formulario:FormGroup

    constructor(private activeRouter: ActivatedRoute, private servicio:ProveedorService,
         private fb:FormBuilder,  private ruta:Router){}

         codigo=parseInt(this.activeRouter.snapshot.paramMap.get("id"))  
    
         ngOnInit(){
           this.servicio.getConsultaProveedor(this.codigo).subscribe(response=>{
             this.proveedor=response
       
             this.formulario=this.fb.group({
               codigo: [this.proveedor.codigo],
               nombre: [this.proveedor.nombre],
               direccion: [this.proveedor.direccion],
               contacto: [this.proveedor.contacto],
               fechaRegistro: [this.proveedor.fechaRegistro]
             })
           })     
        }


        grabarDatos(){
            if(this.formulario.invalid)
            return
            this.servicio.updateProveedor(this.formulario.value).subscribe(response => {
              Swal.fire({
                text: "Proveedor Actualizado",
                icon: 'success',
                confirmButtonColor: '#3085d6',
              }).then((result) => {
                if (result.isConfirmed) {
                  this.ruta.navigate(["lista-proveedor"]);
                }
              })
            })
          }
}
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/Categoria';
import { Producto } from 'src/app/modelo/Producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  listaCategorias:Categoria[]=[]

  estado=false
  formulario:FormGroup
  producto:Producto

  constructor(private activeRouter: ActivatedRoute, private servicio:ProductoService, 
    private apiCategoria:CategoriaService, private fb:FormBuilder,  private ruta:Router){}

    codigo=parseInt(this.activeRouter.snapshot.paramMap.get("id"))  
    
    ngOnInit(){
      this.servicio.getConsultaProducto(this.codigo).subscribe(response=>{
        this.producto=response
  
        //
        this.producto.categoria = this.listaCategorias.find(c => c.codigo === this.producto.categoria.codigo);


        this.formulario=this.fb.group({
          codigo: [this.producto.codigo],
          nombre: [this.producto.nombre,[ Validators.required, this.nombreValidator]],
          precio: [this.producto.precio,[ Validators.required, this.precioPositivoValidator] ],
          stock: [this.producto.stock,[Validators.required, this.stockPositivoValidator ]],
          categoria: [this.producto.categoria]
        })

        
      })
  
      this.apiCategoria.getCategorias().subscribe(response=>{
        this.listaCategorias=response
      })
    }

    

    precioPositivoValidator(control: AbstractControl): ValidationErrors | null {
      const precio = parseFloat(control.value);
      return precio > 0 ? null : { precioNegativo: true };
    }
    
    stockPositivoValidator(control: AbstractControl): ValidationErrors | null {
      const stock = parseFloat(control.value);
      return stock >= 0 ? null : { stockNegativo: true };
    }
    
    nombreValidator(control: AbstractControl): ValidationErrors | null {
      const nombre = control.value;
      const nombrePattern = /^[A-Za-z\s]+$/;
      return nombrePattern.test(nombre) ? null : { nombreInvalido: true };
    }


    grabarDatos(){
      this.estado=true
      if(this.formulario.invalid)
      return
      this.servicio.updateProducto(this.formulario.value).subscribe(response => {
        Swal.fire({
          text: "Producto Actualizado",
          icon: 'success',
          confirmButtonColor: '#3085d6',
        }).then((result) => {
          if (result.isConfirmed) {
            this.ruta.navigate(["lista-producto"]);
          }
        })
      })
    }
  }
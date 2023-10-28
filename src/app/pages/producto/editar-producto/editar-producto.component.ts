import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  
        this.formulario=this.fb.group({
          codigo: [this.producto.codigo],
          nombre: [this.producto.nombre],
          precio: [this.producto.precio],
          stock: [this.producto.stock],
          categoria: [this.producto.categoria]
        })
      })
  
      this.apiCategoria.getCategorias().subscribe(response=>{
        this.listaCategorias=response
      })
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
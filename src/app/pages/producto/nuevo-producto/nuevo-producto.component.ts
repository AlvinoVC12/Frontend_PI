import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/Categoria';
import { Producto } from 'src/app/modelo/Producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  codigo:number
  nombre:string
  precio:number
  stock:number
  categoria:Categoria
  codCategoria:number

  listaCategorias:Categoria[]=[]

  constructor(private apiCategoria:CategoriaService, private apiPro:ProductoService,private formBuilder: FormBuilder,
     private ruta:Router){}



  formsRegistra = this.formBuilder.group({
    validarRazonSocial: ['', [Validators.required]],
    validarDireccion:['', [Validators.required]],
    validaRuc: ['', [Validators.required]],
    validarFechaCreacion: ['', [Validators.required]],
    validaPais: ['', [Validators.required]]
  });




  ngOnInit(){
    this.apiCategoria.getCategorias().subscribe(response=>{
      this.listaCategorias=response
    })
  }

  grabarDatos(){
    this.categoria=new Categoria(this.codCategoria,"")
    var objPro=new Producto(0,this.nombre,this.precio,this.stock,this.categoria)
    this.apiPro.saveProducto(objPro).subscribe(response=>{
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
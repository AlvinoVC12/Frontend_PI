import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/Categoria';
import { Producto } from 'src/app/modelo/Producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

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
  errores: boolean =false;

  nombrePattern = /^[A-Za-z\s]+$/ // Solo letras y espacios para el nombre
  precioPattern = /^\d+(\.\d{1,2})?$/ // Números enteros o decimales con hasta 2 decimales para el precio
  stockPattern = /^\d+$/ // Solo números enteros para el stock

  listaCategorias:Categoria[]=[]

  constructor(private apiCategoria:CategoriaService, private apiPro:ProductoService, private ruta:Router){}

  ngOnInit(){
    this.apiCategoria.getCategorias().subscribe(response=>{
      this.listaCategorias=response
    })
  }

  grabarDatos(){
    this.errores = false
    if (
      !this.nombre ||
      !this.precio ||
      !this.stock ||
      !this.codCategoria ||
      !this.nombrePattern.test(this.nombre) ||
      !this.precioPattern.test(this.precio.toString()) ||
      !this.stockPattern.test(this.stock.toString()) ||
      !this.codCategoria
    ) {
      // Mostrar una alerta de que algunos campos son inválidos o están vacíos
      Swal.fire({
        text: 'Por favor, completa todos los campos correctamente.',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
      this.errores = true
      return; // No continuar con el registro si hay campos vacíos o inválidos
    }

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
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
export class NuevoProductoComponent implements OnInit {
  formulario: FormGroup;
  listaCategorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private apiCategoria: CategoriaService,
    private apiPro: ProductoService,
    private ruta: Router
  ) {}

  ngOnInit() {
    this.apiCategoria.getCategorias().subscribe((response) => {
      this.listaCategorias = response;
    });

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, this.nombreValidator]],
      precio: ['', [Validators.required, this.precioPositivoValidator]],
      stock: ['', [Validators.required, this.stockPositivoValidator]],
      codCategoria: ['',[this.categoriaValidator]]
    });
  }

  precioPositivoValidator(control) {
    const precio = parseFloat(control.value);
    return precio > 0 ? null : { precioNegativo: true };
  }

  stockPositivoValidator(control) {
    const stock = parseFloat(control.value);
    return stock >= 0 ? null : { stockNegativo: true };
  }

  nombreValidator(control) {
    const nombre = control.value;
    const nombrePattern = /^[A-Za-z\s]+$/;
    return nombrePattern.test(nombre) ? null : { nombreInvalido: true };
  }

  categoriaValidator(control: AbstractControl):{[key : string]: any} | null{
    const codCategoria = control.value
    return codCategoria ? null : {categoriaRequerida : true}
  } 

  grabarDatos() {
    if (this.formulario.valid) {
      const { nombre, precio, stock, codCategoria } = this.formulario.value;
      const categoria = new Categoria(codCategoria, '');
      const producto = new Producto(0, nombre, precio, stock, categoria);

      this.apiPro.saveProducto(producto).subscribe(
        (response) => {
          Swal.fire({
            text: 'Registro Exitoso',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          }).then((result) => {
            if (result.isConfirmed) {
              this.ruta.navigate(['lista-producto']);
            }
          });
        },
        (error) => {
          Swal.fire({
            text: 'Error al registrar el producto.',
            icon: 'error',
            confirmButtonColor: '#3085d6'
          });
        }
      );
    } else {
      Swal.fire({
        text: 'Por favor, completa todos los campos correctamente.',
        icon: 'error',
        confirmButtonColor: '#3085d6'
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  estado = false

  formulario:FormGroup = new FormGroup({})

  constructor(private apiUsuario:UsuarioService, private fb:FormBuilder, private router:Router) {}

  ngOnInit():void {
    this.formulario = this.fb.group({
      nombre:[, [Validators.required]],
      apellido:[, [Validators.required]],
      dni:[, [Validators.required]],
      usuario:[, [Validators.required]],
      contrasena:[, [Validators.required]]
    })
  }

  grabarDatos() {
    this.estado = true

    //validar estado de la validación
    if (this.formulario.invalid)
      return

    this.apiUsuario.saveUsuario(this.formulario.value).subscribe(response => {
      this.router.navigate(['lista-usuario'])
    })
  }
}
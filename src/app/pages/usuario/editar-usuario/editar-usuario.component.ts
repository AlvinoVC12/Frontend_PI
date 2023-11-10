import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  estado = false

  formulario:FormGroup

  usuario:Usuario

  constructor(private activeRouter:ActivatedRoute, private servicio:UsuarioService, private fb:FormBuilder, private router:Router) {}

  codigo = parseInt(this.activeRouter.snapshot.paramMap.get("id"))

  ngOnInit() {
    this.servicio.getConsultaUsuario(this.codigo).subscribe(response => {
      this.usuario = response
      this.formulario = this.fb.group({
        codigo:[this.usuario.codigo],
        nombre:[this.usuario.nombre, [Validators.required]],
        apellido:[this.usuario.apellido, [Validators.required]],
        dni:[this.usuario.dni, [Validators.required]],
        usuario:[this.usuario.usuario, [Validators.required]],
        contrasena:[this.usuario.contrasena, [Validators.required]]
      })
    })
  }

  grabarDatos() {
    this.estado = true

    if (this.formulario.invalid)
      return

    this.servicio.updateUsuario(this.formulario.value).subscribe(response => {
      this.router.navigate(['lista-usuario'])
    })
  }
}
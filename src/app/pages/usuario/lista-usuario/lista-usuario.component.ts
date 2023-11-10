import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {
  listaUsuarios:Usuario[] = []

  constructor(private api:UsuarioService, private router:Router) {}

  ngOnInit():void {
    this.api.getUsuarios().subscribe(data => {
      this.listaUsuarios = data
    })
  }
  editar(codUsu:number) {
    this.router.navigate(['usuario/editar/', codUsu])
  }
  eliminar(codUsu:number) {
    this.api.deleteUsuario(codUsu).subscribe(data => {
      window.location.reload();
    })
  }
}
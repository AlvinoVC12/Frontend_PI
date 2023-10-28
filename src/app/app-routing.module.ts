import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './pages/producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './pages/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './pages/producto/editar-producto/editar-producto.component';

const routes: Routes = [
  { path: 'lista-producto', component:ListaProductoComponent },
  { path: 'nuevo-producto', component:NuevoProductoComponent },
  { path: 'producto/editar/:id', component:EditarProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './pages/producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './pages/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './pages/producto/editar-producto/editar-producto.component';
import { ListarProveedorComponent } from './pages/proveedor/listar-proveedor/listar-proveedor.component';
import { AgregarProveedorComponent } from './pages/proveedor/agregar-proveedor/agregar-proveedor.component';

const routes: Routes = [
  { path: 'lista-producto', component:ListaProductoComponent },
  { path: 'nuevo-producto', component:NuevoProductoComponent },
  { path: 'producto/editar/:id', component:EditarProductoComponent },
  { path: 'lista-proveedor', component:ListarProveedorComponent },
  {path: 'agregar-proveedor', component:AgregarProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

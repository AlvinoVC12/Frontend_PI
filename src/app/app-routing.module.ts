import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './pages/producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './pages/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './pages/producto/editar-producto/editar-producto.component';
import { ListarProveedorComponent } from './pages/proveedor/listar-proveedor/listar-proveedor.component';
import { AgregarProveedorComponent } from './pages/proveedor/agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './pages/proveedor/editar-proveedor/editar-proveedor.component';
import { ListaUsuarioComponent } from './pages/usuario/lista-usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './pages/usuario/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { ListaOrdenCompraComponent } from './pages/orden-compra/lista-orden-compra/lista-orden-compra.component';
import { ListaOrdenCompraDetalleComponent } from './pages/orden-compra-detalle/lista-orden-compra-detalle/lista-orden-compra-detalle.component';
import { AgregarOrdenCompraComponent } from './pages/orden-compra/agregar-orden-compra/agregar-orden-compra.component';

const routes: Routes = [
  { path: 'lista-producto', component:ListaProductoComponent },
  { path: 'nuevo-producto', component:NuevoProductoComponent },
  { path: 'producto/editar/:id', component:EditarProductoComponent },
  { path: 'lista-proveedor', component:ListarProveedorComponent },
  {path: 'agregar-proveedor', component:AgregarProveedorComponent},
  {path: 'proveedor/editar/:id', component:EditarProveedorComponent},
  { path: 'lista-usuario', component:ListaUsuarioComponent },
  { path: 'nuevo-usuario', component:NuevoUsuarioComponent },
  { path: 'usuario/editar/:id', component:EditarUsuarioComponent },
  { path: 'agregar-orden-compra', component:AgregarOrdenCompraComponent},
  { path: 'lista-orden-compra', component:ListaOrdenCompraComponent},
  { path: 'lista-orden-compra-detalle', component:ListaOrdenCompraDetalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

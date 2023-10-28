import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarProductoComponent } from './pages/producto/editar-producto/editar-producto.component';
import { NuevoProductoComponent } from './pages/producto/nuevo-producto/nuevo-producto.component';
import { ListaProductoComponent } from './pages/producto/lista-producto/lista-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ListaOrdenCompraComponent } from './pages/orden-compra/lista-orden-compra/lista-orden-compra.component';
import { AgregarOrdenCompraComponent } from './pages/orden-compra/agregar-orden-compra/agregar-orden-compra.component';
import { ListarProveedorComponent } from './pages/proveedor/listar-proveedor/listar-proveedor.component';
import { AgregarProveedorComponent } from './pages/proveedor/agregar-proveedor/agregar-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarProductoComponent,
    NuevoProductoComponent,
    ListaProductoComponent,
    SidebarComponent,
    ListaOrdenCompraComponent,
    AgregarOrdenCompraComponent,
    ListarProveedorComponent,
    AgregarProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

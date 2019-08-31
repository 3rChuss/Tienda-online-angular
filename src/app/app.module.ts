import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DProductoComponent } from './d-producto/d-producto.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductosComponent } from './productos/productos.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    TopMenuComponent,
    CatalogoComponent,
    DProductoComponent,
    ProductosComponent,
    PrincipalComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

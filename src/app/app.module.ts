import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DProductoComponent } from './d-producto/d-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    CatalogoComponent,
    DProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ //ruta detalles productos
      { path: '', component: CatalogoComponent },
      { path: 'producto/:nombre', component: DProductoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

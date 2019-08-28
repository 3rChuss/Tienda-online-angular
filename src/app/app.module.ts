import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DProductoComponent } from './d-producto/d-producto.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    CatalogoComponent,
    DProductoComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ //ruta detalles productos
      { path: '', component: UserLoginComponent},
      { path: 'catalogo', component: CatalogoComponent, 
        children: [{
          path: '',
          redirectTo: 'catalogo', 
          pathMatch: 'full'
        }
      ]
      },
      { path: 'producto/:nombre', component: DProductoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

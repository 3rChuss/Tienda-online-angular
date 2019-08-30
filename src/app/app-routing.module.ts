import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DProductoComponent } from './d-producto/d-producto.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: UserLoginComponent },
  {   
    path: 'catalogo', 
    component: PrincipalComponent,
    children : [
      {
        path: '',
        redirectTo: 'catalogo',
        pathMatch: 'full'
      },
      { path: '', component: CatalogoComponent },
      { path: 'producto/:nombre', component: DProductoComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { AppComponent } from 'src/app/app.component';
import { ProductosComponent } from './productos/productos.component';
import { adminGuard } from 'src/app/services/admin.guard';
import { AdminproductosComponent } from '../adminproductos/adminproductos.component';
import { EditarproductosComponent } from '../adminproductos/editarproductos/editarproductos.component';
const routes: Routes = [

  { path: '', component: DashboardComponent, children:[
    { path:'', component:InicioComponent},
    { path:'usuarios', component:UsuariosComponent, canActivate:[adminGuard] },
    { path:'crear-usuario', component:CrearUsuarioComponent},
    { path: 'productos', component:ProductosComponent },
    { path: 'adminproductos', component:AdminproductosComponent },
    { path: 'editarproductos', component:EditarproductosComponent }
    //{ path: 'logout', component:AppComponent}
  ] }   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

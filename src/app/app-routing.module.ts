import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DivisasComponent } from './pages/divisas/divisas.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { SalirComponent } from './pages/salir/salir.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "posts"},
  {path:"posts", component:ListaPostsComponent},
  {path:"blog/new", component:FormularioComponent},
  {path:"divisas", component:DivisasComponent},
  {path:"paises", component:PaisesComponent },
  {path:"registro", component:RegistroComponent},
  {path:"login", component:LoginComponent},
  {path:"salir", component:SalirComponent},
  {path: "**", redirectTo: "empleados"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

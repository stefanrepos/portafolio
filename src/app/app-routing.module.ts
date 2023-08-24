import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
  
// Define las rutas
const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children: [ 
  { path: 'dasboard', component: DashboardComponent },     // Ruta raíz (página de inicio)
    ]
  },
{ path: 'login', component: LoginComponent}, // Ruta para la página "Contacto"}
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

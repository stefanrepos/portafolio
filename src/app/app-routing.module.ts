import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { DashboardComponent } from "./modulos/dashboard/dashboard.component";
import { PruebaComponent } from "./modulos/prueba/prueba.component";
import { UsuarioComponent } from "./modulos/usuario/usuario.component";
import { SuscripcionesComponent } from "./modulos/suscripciones/suscripciones.component";
import { LoginComponent } from "./modulos/login/login.component";
import { PrincipalComponent } from "./modulos/principal.component";
import { SoporteComponent } from "./modulos/soporte/soporte.component";
import { PortafoliosComponent } from "./modulos/portafolios/portafolios.component";
import { SalentComponent } from "./modulos/proyecto/salent/salent.component";
import { ValidauserGuard } from "./guards/validauser.guard";

const routes: Routes = [
  {
    path: '',component: PrincipalComponent,
    canActivate: [ValidauserGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'portafolios',
        component: PortafoliosComponent,
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
      },
      {
        path: 'suscripciones',
        component: SuscripcionesComponent,
      },
      {
        path: 'soporte',
        component: SoporteComponent,
      },

      {
        path: 'prueba',
        component: PruebaComponent,
      }, // modulo para pruebas de interfaz

      {
        path: 'salent',
        component: SalentComponent,
      }, // modulo para pruebas de interfaz

      { path: '', redirectTo: '/usuario', pathMatch: 'full'}
    ]
  },  
   {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //  forRoot() configure the router at the application's root level.
  exports: [RouterModule],
})
export class AppRoutingModule {}

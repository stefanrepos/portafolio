import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// LISTADO DE COMPONENTES /// 
import { AppComponent } from './app.component';
import { PrincipalComponent } from './modulos/principal.component';
import { HeaderComponent } from './estructura/header/header.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { NavComponent } from './estructura/nav/nav.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { SidebarComponent } from './estructura/sidebar/sidebar.component';
import { SuscripcionesComponent } from './modulos/suscripciones/suscripciones.component';
import { SoporteComponent } from './modulos/soporte/soporte.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
import { PruebaComponent } from './modulos/prueba/prueba.component';
import { PortafoliosComponent } from './modulos/portafolios/portafolios.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    SidebarComponent,
    SoporteComponent,
    UsuarioComponent,
    PruebaComponent,
    PortafoliosComponent,
    SuscripcionesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,

 
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
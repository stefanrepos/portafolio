import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// LISTADO DE COMPONENTES /// 
import { AppComponent } from './app.component';
import { PrincipalComponent } from './modulos/principal.component';
import { HeaderComponent } from './estructura/header/header.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { NavComponent } from './estructura/nav/nav.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
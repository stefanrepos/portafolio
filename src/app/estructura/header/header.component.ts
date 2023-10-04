import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Variable para controlar la visibilidad del logo
  showLogo: boolean = true;

  constructor(private router: Router) {}

  // Función para cerrar sesión
  logout() {
    // Aquí puedes agregar la lógica para cerrar la sesión del usuario
    // Por ejemplo, eliminar tokens de autenticación, limpiar datos de sesión, etc.
    
    // Luego, redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  // Función para abrir la configuración
  openSettings() {
    // Aquí puedes agregar la lógica para abrir la página de configuración
    // Por ejemplo, navegar a una ruta de configuración específica
    this.router.navigate(['/configuracion']);
  }
}

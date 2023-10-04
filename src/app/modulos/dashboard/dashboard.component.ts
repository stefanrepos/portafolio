import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Perfil', cols: 1, rows: 1,
            content: {
              name: 'Nombre de Usuario',
              email: 'correo@example.com',
              projects: 3,
              services: 5,
              socialMedia: 'Twitter, Facebook',
              preferences: 'Preferencia 1, Preferencia 2',
              contact: 'Teléfono: 123-456-7890',
              thumbnail: 'url_de_la_miniatura.jpg'
            }
          },
          {
            title: 'About', cols: 1, rows: 1,
            content: {
              description: 'Descripcion demaximo 250 caracteres.',
              artistTypes: ['Pintor', 'Escultor', 'Músico'] // Crea el array no debe estar vacio 
            }
            
          },
          {
            title: 'Proyectos', cols: 1, rows: 1,
            content: {
              number: ['200', '300', '400'] ,
              dataName: ['Nombre1', 'Nombre2', 'Nombre3'] // Asegúrate de que dataName esté definido y tenga la misma cantidad de elementos que number
            }
                  
          },
          { title: 'Canales', cols: 1, rows: 1 },
          { title: 'Servicios', cols: 1, rows: 1 }
        ];
      }
      // Tarjetas para pantallas grandes (escritorio)
      return [
        {
          title: 'Perfil', cols: 2, rows: 1,
          content: {
            name: 'Nombre de Usuario',
            email: 'correo@example.com',
            projects: 3,
            services: 5,
            socialMedia: 'Twitter, Facebook',
            preferences: 'Preferencia 1, Preferencia 2',
            contact: 'Teléfono: 123-456-7890',
            thumbnail: 'url_de_la_miniatura.jpg' // Agrega la URL de la miniatura aquí
          }
        },
        {
          title: 'About', cols: 1, rows: 1,
          content: {
            description: 'Descripcion demaximo 250 caracteres.',
            artistTypes: ['Pintor', 'Escultor', 'Músico'] // Crea el array no debe estar vacio 
          }
        },
        {
          title: 'Proyectos', cols: 1, rows: 1,
           content: {
            number: ['200', '300', '400'] ,
            dataName: ['Nombre1', 'Nombre2', 'Nombre3'] // Asegúrate de que dataName esté definido y tenga la misma cantidad de elementos que number
          }
      
        },
        { title: 'Canales', cols: 1, rows: 1 },
        { title: 'Servicios', cols: 1, rows: 1 }
      ];
    })
  );
}

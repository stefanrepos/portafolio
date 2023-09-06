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
          { title: 'Perfil', cols: 1, rows: 1 },
          { title: 'About', cols: 1, rows: 1 },
          { title: 'Intereses', cols: 1, rows: 1 },
          { title: 'Proyectos', cols: 1, rows: 1 },
          { title: 'Servicios', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Perfil', cols: 2, rows: 1 },
        { title: 'About', cols: 1, rows: 1 },
        { title: 'Intereses', cols: 1, rows: 2 },
        { title: 'Proyectos', cols: 1, rows: 1 },
        { title: 'Servicios', cols: 1, rows: 1 }
      ];
    })
  );
}

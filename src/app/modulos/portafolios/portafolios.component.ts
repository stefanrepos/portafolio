import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.scss']
})
export class PortafoliosComponent {
  data: any[] = [
    // Aquí puedes agregar objetos con datos iniciales si lo deseas
    {
      creador: 'Usuario 1',
      nombre: 'Proyecto 1',
      descripcion: 'Descripción 1',
      tipo: 'Tipo 1',
      estado: 'Activo',
      archivo: 'Archivo 1',
      fechaCreacion: '2023-01-01',
      servicios: 'Servicio 1',
      canales: 'Canal 1',
      suscripcion: 'Pendiente'
    },
    // Agrega más objetos según sea necesario
  ];

  agregar() {
    // Agrega una nueva fila a los datos
    this.data.push({});
  }

  editar(item: any) {
    // Implementa la lógica para editar una fila
    // Puedes abrir un diálogo de edición o realizar cualquier acción que necesites
    console.log('Editar', item);
  }

  eliminar(item: any) {
    // Implementa la lógica para eliminar una fila
    // Puedes confirmar la eliminación con un cuadro de diálogo y luego eliminar el elemento del arreglo
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este elemento?');
    if (confirmar) {
      const index = this.data.indexOf(item);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent {


  asunto: string = '';
  descripcion: string = '';
  estado: string = '';

  enviarTicket() {
    // Aquí deberías enviar los datos del ticket al servicio de soporte
    // Por ejemplo, puedes crear un objeto de ticket y enviarlo al servicio
    const ticket = {
      asunto: this.asunto,
      descripcion: this.descripcion,
      estado: 'Pendiente' // Por defecto, estado pendiente
    };
    console.log('Ticket enviado:', ticket);
    
    // Limpia el formulario después de enviarlo
    this.asunto = '';
    this.descripcion = '';
    this.estado = "";
  }

}

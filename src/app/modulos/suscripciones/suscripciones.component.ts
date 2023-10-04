import { Component } from '@angular/core';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.scss']
})
export class SuscripcionesComponent {
  selectedPlan: string = ''; // Propiedad para almacenar el plan seleccionado
  fullName: string = ''; // Propiedad para el nombre completo
  email: string = ''; // Propiedad para el correo electrónico
  phoneNumber: string = ''; // Propiedad para el número de teléfono
  cardNumber: string = ''; // Propiedad para el número de tarjeta
  expirationDate: string = ''; // Propiedad para la fecha de vencimiento
  securityCode: string = ''; // Propiedad para el código de seguridad
  paymentStatus: string = 'pendiente'; // Estado de pago inicial

  constructor() {}

  // Función para suscribirse
  subscribe() {
    // Aquí puedes agregar la lógica para procesar la suscripción, por ejemplo, enviar datos al servidor
    // Una vez que se procese la suscripción, puedes actualizar el estado de pago (paymentStatus) y redirigir al usuario
    this.paymentStatus = 'confirmado'; // Cambiar a 'confirmado' cuando se confirme el pago
    // Puedes redirigir al usuario a una página de confirmación aquí
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionesService {

  // Define la URL base para las llamadas a la API
  url = 'http://localhost/portafolio/src/app/php/suscripciones/';

  constructor(private http: HttpClient) { }

  // Método para consultar la lista de suscripciones
  consultar() {
    // Realiza una llamada GET a la URL 'consulta.php'
    return this.http.get(`${this.url}consulta.php`);
  }

  // Método para consultar la lista de áreas
  consultara() {
    // Realiza una llamada GET a la URL 'consulta_area.php'
    return this.http.get(`${this.url}consulta_area.php`);
  }

  // Método para consultar la lista de monedas
  consultarm() {
    // Realiza una llamada GET a la URL 'consulta_moneda.php'
    return this.http.get(`${this.url}consulta_moneda.php`);
  }

  // Método para insertar una nueva suscripción
  insertar(datos: any) {
    // Convierte los datos a JSON y realiza una llamada POST a la URL 'insertar.php'
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(datos));
  }

  // Método para eliminar una suscripción por ID
  eliminar(id: number) {
    // Realiza una llamada GET a la URL 'eliminar.php?id={id}'
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }

  // Método para seleccionar una suscripción por ID
  seleccionar(id: number) {
    // Realiza una llamada GET a la URL 'seleccionar.php?id={id}'
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
  }

  // Método para editar una suscripción
  edit(datos: any, id: number) {
    // Convierte los datos a JSON y realiza una llamada POST a la URL 'editar.php?id={id}'
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
  }
}

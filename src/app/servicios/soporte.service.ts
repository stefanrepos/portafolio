import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SoporteService {
    // Define la URL base para las llamadas a la API
  url = 'http://localhost/portafolio/src/app/php/soporte/';
  constructor(private http: HttpClient) { }

    // Método para consultar la lista de soportes
  consultar() {
    // Realiza una llamada GET a la URL 'consulta.php' para obtener la lista de soportes
    return this.http.get(`${this.url}consulta.php`); // definir las url siempre de las consultas php antes ralizadas
  }

    // Método para insertar un nuevo soporte
  insertar(user:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(user));    
  }
    // Método para eliminar un soporte por ID
  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`);    
  }

  // Método para seleccionar un soporte por ID
  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);    
  }

  // Método para editar un soporte
  edit(datos:any, id:number) {
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));  
  }

}
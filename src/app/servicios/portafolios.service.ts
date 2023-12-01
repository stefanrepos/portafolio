import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PortafoliosService {

  // **Define la URL base para la API de portafolios**
  url = 'http://localhost/portafolio/src/app/php/portafolios/';

  // **Realiza una solicitud HTTP GET para recuperar todos los portafolios**
  constructor(private http: HttpClient) { } 
  
  // Llamar las funciones Distintos servicios del modulo 
  consultar() {
        // **Asegura el procesamiento de JSON para la codificación de datos adecuada**
    return this.http.get(`${this.url}consulta.php`); // definir las url siempre de las consultas php antes ralizadas

  }
  // **Realiza una solicitud HTTP POST para insertar un nuevo portafolio**
  insertar(user: any) {
        // **Envía los datos de usuario formateados en JSON al punto final insert.php**
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(user));
    
  }
  // **Realiza una solicitud HTTP GET para eliminar un portafolio con el ID especificado**
  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
    
  }
  // **Realiza una solicitud HTTP GET para recuperar un portafolio específico con el ID especificado**
  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);    
  }

  // **Realiza una solicitud HTTP POST para actualizar un portafolio existente con el ID especificado**
  edit(datos: any, id: number) {
  // **Envía los datos de datos formateados en JSON al punto final editar.php, junto con el ID del portafolio**
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
    
  }


}
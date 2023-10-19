import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalentService {
  //2. Asignar la URL  del servidor backend en el que se encuentra el PHP
  url = 'http://localhost/portafolio/src/app/php/salent/';
  constructor(private http: HttpClient) { }
  //3. Cargar los distintos metodos del Modelo app/php/
  consultar() {
    return this.http.get(`${this.url}consulta.php`); // definir las url siempre de las consultas php antes de solicitarlas
  }
}


// Este servicio comunica con un backend PHP para cargar datos desde una URL específica mediante solicitudes HTTP.//
// La URL se compone de la ubicación del archivo PHP, y el servicio HttpClient se utiliza para realizar la solicitud GET.//
//Esto facilita la consulta de datos desde el servidor al frontend de la aplicación.// 
 // 1. importar el import { HttpClient} from '@angular/common/http'; /// 

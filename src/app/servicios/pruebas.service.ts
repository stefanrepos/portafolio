import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  url = 'http://localhost/portafolio/src/app/php/pruebas/';

  constructor(private http: HttpClient) { }  // asegurar procesamiento json , para codificar // 
// Llamar las funciones Distintos servicios del modulo Usuario
  consultar() {
    return this.http.get(`${this.url}consulta.php`); // definir las url siempre de las consultas php antes ralizadas
  }
  insertar(canales:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(canales));
    
  }
  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
    
  }
  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
    
  }
  edit(datos:any) {
    return this.http.post(`${this.url}editar.php`, JSON.stringify(datos));
    
  }

  // Métodos y lógica para ESTADISTICAS DE SERVICIO 

  recuento() {
    return this.http.get(`${this.url}recuento.php`); // definir el QUery en el PHP  - base de datos -  
  }


}

@Injectable({
  providedIn: 'root'
})
export class CanalesService {
  url = 'http://localhost/portafolio/src/app/php/canales/';
  constructor(private http: HttpClient) { }
  consultar() {
    return this.http.get(`${this.url}consulta.php`); // definir las url siempre de las consultas php antes ralizadas

  }


  

  // Métodos y lógica para el servicio 2
}

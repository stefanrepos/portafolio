import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost/portafolio/src/app/php/usuario/';

  constructor(private http: HttpClient) { }  // asegurar procesamiento json , para codificar // 

// Llamar las funciones Distintos servicios del modulo Usuario
  
  consultar() {
    return this.http.get(`${this.url}consulta.php`); // definir las url siempre de las consultas php antes ralizadas

  }

  insertar(user:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(user));
    
  }
  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
    
  }


  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
    
  }


  edit(datos:any, id:number) {
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
    
  }




}

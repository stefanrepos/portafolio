import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  url = 'http://localhost/portafolio/src/app/php/soporte/';
  constructor(private http: HttpClient) { }
  consultar() {
    return this.http.get(`${this.url}consulta.php`); // definir las url siempre de las consultas php antes ralizadas

  }

}
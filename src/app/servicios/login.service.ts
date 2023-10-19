import { HttpClient} from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost/portafolio/src/app/php/login/';

  consultar(user:any,clave:any) {
    return this.http.get(`${this.url}login.php?user=${user}&clave=${clave}`); 

  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  
  
  private url: string = "http://localhost/imagenes-api/uploads";

  constructor(private http: HttpClient) { }
 
  enviarImagen(imagen: any) {
     const formData = new FormData();
     formData.append('nombre', imagen.nombre);
     formData.append('tipo', imagen.tipo);
     formData.append('base64', imagen.base64);
 
     return this.http.post<any>(this.url, formData);
  }
}

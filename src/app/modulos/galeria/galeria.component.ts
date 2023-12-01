import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  
url: any; 
msg = "";
imagen: any;

constructor(private http: HttpClient, private imgSrv: ImagenesService) { }
  
ngOnInit() {
}
selectFile(event: any) {
  if(!event.target.files[0] || event.target.files[0].length == 0) {
    this.msg = 'Debes seleccionar una imagen';
    return;
  }
  
  var mimeType = event.target.files[0].type;
  
  if (mimeType.match(/image\/*/) == null) {
    this.msg = "Only images are supported";
    return;
  }
  
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  
  reader.onload = (_event) => {
    this.msg = "";
    this.url = reader.result; 

   // Guardar la imagen y sus atributos en la variable imagen
    this.imagen = {
      nombre: event.target.files[0].name,
      tipo: mimeType,
      base64: this.url
    };

  };
  
}
  
enviarImagen() {
  if(!this.imagen) {
     this.msg = 'Debes seleccionar una imagen';
     return;
  }
 
  this.imgSrv.enviarImagen(this.imagen).subscribe(
     data => {
       console.log('Imagen enviada con éxito:', data);
       this.msg = "Imagen enviada con éxito";
     },
     error => {
       console.log('Error al enviar la imagen:', error);
       this.msg = "Error al enviar la imagen";
     }
  );
}

  mostrarAtributosImagen() {
    console.log('Nombre de la imagen: ' + this.imagen.nombre);
    console.log('Tipo de la imagen: ' + this.imagen.tipo);
    console.log('Base64 de la imagen: ' + this.imagen.base64);
  }

}


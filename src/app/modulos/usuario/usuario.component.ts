import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
  
 // 1. // 
  
export class UsuarioComponent implements OnInit {
// CREAR UNAS VARIABLES GLOBALES // 
  verf = false;
  usuario: any;
  // crear el modelo en angular ngModel para luego ser referenciado cada variable en los imput del form // 
  user = {
    nombre: "",
    usuario: "",
    clave: "",
    tipo: ""
  };

     constructor(private suser:UsuarioService) { } // asignar un nombre glogal al servicio usuario //
      
      ngOnInit(): void {
        this.consulta();
   
        console.log("En este instante el componente ha cargado");
      }

      //Funcionalidad del boton - mostrar el formulario recibe un dato , si es cero se oculta si es 1 no debe ocultarse//
      mostrar(dato: any) {
        switch (dato) {
          case 0:
            this.verf = false;
            break;
          case 1:
            this.verf = true;
            break;
        }
        
      }

      // Funcionalidad de la base de datos desde el servicio USER // 
      consulta() {
        this.suser.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
          this.usuario = result;
          console.log(this.usuario);//
          console.log("Se ha cargado el ARRAY correctamente");
        })
  
      }
      // funcion para ingresar datos previamente se definidoo el servicio inertar.php SQL  en UsuarioService  // 
      ingresar() {
      this.suser.insertar(this.user).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        console.log('Datos insertados');
        console.log(this.usuario);
        this.consulta();
      }
    });
    this.mostrar(0);

      }

}
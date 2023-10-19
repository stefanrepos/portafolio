import { Router,RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/* Implementar la interfaz OnInit para inicializar componentes y ejecutar código
  * validar que Oninit se encuentre cargado en el import
 */  
 /*inicializar componentes,  configurar variables, cargar rutina de consultas 
  */
export class LoginComponent implements OnInit{ /**Inicializar el componente */
  /*
  *Configuracion de variables globales y el modelo para consulta*/ 
  /*
  *variables globales
  */
  email: any;
  clave: any;
  usuario: any;
  error = false;
  /*
  *Modelo NgModel
  */
  user = {
    nombre: "",
    usuario: "",
    clave: "",
    tipo: ""
  };
  /*
  /*
  * Crear el constructor - Código de inicialización y configuración del componente*/
  constructor(private slogin:LoginService, private router: Router) {}
  /** Metodo de ciclo de vida- Se llama solo una vez, justo después de que el componente y sus propiedades hayan sido inicializados*/
  ngOnInit(): void{ 
     console.log('El componente se ha cargado');
  }
  /*Interacciones de la base de datos desde el servicio LOGIN */ 
  consultaLogin() {
      this.slogin.consultar(this.email, this.clave).subscribe((result: any) => {
      this.usuario = result;
      console.log(this.usuario);
        console.log("Se ha cargado el ARRAY USER correctamente");

        if (this.usuario[0].validar == "valida") {
          console.log("entro");
          sessionStorage.setItem('id', this.usuario[0].id_usuario);
          sessionStorage.setItem('nombre', this.usuario[0].nombre);
          sessionStorage.setItem('usuario', this.usuario[0].usuario); // Añade esta línea para almacenar el campo "usuario"
          sessionStorage.setItem('tipo', this.usuario[0].tipo);
          this.router.navigate(['usuario']);
     
        } else {
          alert("Usuario o Contraseña incorrectos");
          console.log("no entro");
          this.error = true;
        }
      }) 
  }
  
  


}
/*Fin del Componente*/

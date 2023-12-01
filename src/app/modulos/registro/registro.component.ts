import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  mostrarFormulario = false;
  usuario: any;
  datos: any;
  iduser: any;
  usuarioLoggeado: any; // Variable para almacenar los datos del usuario loggeado
 // crear el modelo en angular ngModel para luego ser referenciado cada variable en los imput del form // 
  user = {
    nombre: "",
    usuario: "",
    clave: "",
    tipo: ""
  };
  // variables para la validacion // 
  validanombre = true;
  validausuario = true;
  validaclave = true;
  validatipo = true;
  beditar = false;

  constructor(private suser: UsuarioService, private router: Router) { } // asignar un nombre glogal al servicio usuario //


  ngOnInit(): void {
    this.obtenerUsuarioLoggeado();
    this.consulta();
    this.limpiar();
    this.usuario = this.usuarioLoggeado;
      console.log("En este instante el componente ha cargado");
      console.log(this.usuarioLoggeado);
    }

    obtenerUsuarioLoggeado() {
      // Obtiene los datos del usuario loggeado desde el almacenamiento local (sessionStorage)
      this.usuarioLoggeado = {
        id: sessionStorage.getItem('id'),
        nombre: sessionStorage.getItem('nombre'),
        usuario: sessionStorage.getItem('usuario'), /* correo electronico */
        tipo: sessionStorage.getItem('tipo')
      
      };
  
      console.log(this.usuarioLoggeado);
  
    }
  
  crearCuenta() {
    this.router.navigate(['/registro']);
    }

    consulta() {
      this.suser.consultar().subscribe((result: any) => {// subscribe  para cargar en tiempo real 
        this.usuario = result;
        console.log(this.usuario);//
        console.log("Se ha cargado el ARRAY correctamente");
      });
        
    }
  
    ingresar() {
  
      if (this.validanombre == true &&
        this.validausuario == true &&
        this.validaclave == true    
       
        ) {
        this.user.nombre = this.usuarioLoggeado.nombre;
        this.suser.insertar(this.user).subscribe((datos: any) => {
          if (datos['resultado'] == 'OK') {
            console.log('Datos insertados');
            console.log(this.usuario);
            this.consulta();
          }
        });
         
        this.mostrar(0);
        this.limpiar();
          
      }
  
    }
  
    mostrar(dato: any) {
      switch (dato) {
        case 0:
          this.mostrarFormulario  = false;
          this.beditar = false;
          this.iduser = "";
          this.limpiar();
          break;
        case 1:
          this.mostrarFormulario = true;
          console.log(" insertar() esta corriendo como true.");
  
          break;
      }
   
    }
  
    limpiar() {
      this.user.nombre = "";
      this.user.clave = "";
      this.user.tipo = "";
      this.user.usuario = "";
      
    }



















}

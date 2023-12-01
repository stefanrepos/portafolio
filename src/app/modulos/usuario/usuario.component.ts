import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
 
export class UsuarioComponent implements OnInit {
   // CREAR UNAS VARIABLES GLOBALES //
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

  // 1. Funcionalidad del boton - mostrar el formulario recibe un dato//
  //si es cero se oculta si es 1 no debe ocultarse//
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.mostrarFormulario = false;
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
  // 2. Funcionalidad de la base de datos desde el servicio USER // 
  consulta() {
    this.suser.consultar().subscribe((result: any) => {// subscribe  para cargar en tiempo real 
      this.usuario = result;
      console.log(this.usuario);//
      console.log("Se ha cargado el ARRAY correctamente");
    });
      
  }



  // 3. validar antes de ingresar dato 
  validar() {

    if (this.user.nombre == "") {
      this.validanombre = false;
    } else {
      this.validanombre = true;
    }

    if (this.user.usuario == "") {
      this.validausuario = false;
    } else {
      this.validausuario = true;
    }

    if (this.user.clave == "") {
      this.validaclave = false;
    } else {
      this.validaclave = true;
    }

    if (this.user.tipo == "") {
      this.validatipo = false;
    } else {
      this.validatipo = true;
    }
  
  }
  
  // funcion para ingresar datos previamente se definido el servicio inertar.php SQL  en UsuarioService  // 
  ingresar() {
    this.validar();

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
  
  /// 4. Agregar alertas, se agrega una linea en consola para verificar el usuario - la expresion id_usuario debe estar escrita igual que la base de datos
  preguntar(id: any, nombre: any) {
    console.log("entro con el usuario" + id);
    Swal.fire({
      title: 'Esta seguro de eliminar el usuario' + nombre + '?',
      text: "El proceso no podra ser revertido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) { // llamar la funcio borrar id_usuario 
        this.borrarusuario(id);
        Swal.fire(
          'Eliminado!',
          'El registro ha sido borrado.',
          'success'
        )
      }
    })
  }
  
  borrarusuario(id: any) {
    if (id === this.usuarioLoggeado.id_usuario) {
      console.log(id);
      this.suser.eliminar(id).subscribe((datos: any) => {
        if (datos['resultado'] == 'OK') {
          this.consulta();
        }
      });
    }
    else {
      // Mostrar un mensaje si el usuario no es el creador del servicio
      Swal.fire("No tienes permiso para editar este servicio.");
    }
  }

  cargarDatos(datos: any, id: number) {
    if (datos.nombre === this.usuarioLoggeado.nombre) {
    this.user.nombre = datos.nombre;
    this.user.usuario = datos.usuario;
    this.user.clave = datos.clave;
    this.user.tipo = datos.tipo;
    this.iduser = id;
    this.mostrar(1);
    this.beditar = true;
  } else {
    // Mostrar un mensaje si el usuario no es el creador del servicio
    Swal.fire("No tienes permiso para editar este servicio.");
  }
  }

  editar() {
    this.validar();

    if (
      this.validanombre == true &&
      this.validausuario == true &&
      this.validaclave == true
    ){
      this.user.usuario = this.usuarioLoggeado.nombre;
      this.suser.edit(this.user, this.iduser).subscribe((datos: any) => {
        if (datos['resultado'] == 'OK') {
          console.log('Datos insertados');
          console.log(this.usuario);
          this.consulta();
        }
      });
       
      this.mostrar(0);

            
    }
  }

  /*   OTRAS FUNCIONALIDADES OARA BOTONES ...................................................................................................
  *navegacion
   */
  verPortafolio() {
    this.router.navigate(['/portafolios']); 
  }
  
  verServicios() {
    this.router.navigate(['/suscripciones'])
  }
  
  verSoporte() {
    this.router.navigate(['/soporte'])
  }
  

  // ........................................................................................................................................................

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


}



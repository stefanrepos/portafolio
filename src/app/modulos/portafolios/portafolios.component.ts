import { PortafoliosService } from "src/app/servicios/portafolios.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-portafolios",
  templateUrl: "./portafolios.component.html",
  styleUrls: ["./portafolios.component.scss"],
})
export class PortafoliosComponent implements OnInit {
  // CREAR UNAS VARIABLES GLOBALES //
  verf = false;
  portafolio: any;
  datos: any;
  idportafolio: any;
  usuarioLoggeado: any; // Variable para almacenar los datos del usuario loggeado
  mostrarPortafolio: boolean = false;


  // crear el modelo en angular ngModel para luego ser referenciado cada variable en los imput del form //
  uportafolio = {
    creador: "",
    nombre: "",
    descripcion: "",
    tipo: "",
    FO_areas: 18,
    estado: "",
    fecha_creacion: "",
    FO_canales: 1,
  };
  // variables para la validacion //

  validanombre = true;
  validadescripcion = true;
  validatipo = true;
  validacreador= true;
  beditar = false;

  constructor(private sportafolio: PortafoliosService) {} // asignar un nombre glogal al servicio usuario //

  ngOnInit(): void {
    this.obtenerUsuarioLoggeado();
    this.consulta();
    this.limpiar();
    console.log("Usuario loggeado:", this.usuarioLoggeado);
    console.log("En este instante el componente ha cargado", this.usuarioLoggeado);

  }

  // 1. Funcionalidad del boton - mostrar el formulario recibe un dato//
  //si es cero se oculta si es 1 no debe ocultarse//
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idportafolio = "";
        this.limpiar();
        break;
      case 1:
        this.verf = true;
        console.log(" insertar() esta corriendo como true.");

        break;
    }
  }


  mostrarMisPortafolios() {
    this.mostrarPortafolio = true;
    this.verf = false; // Oculta el formulario al mostrar la tabla
    this.beditar = false;
    this.portafolio = this.portafolio.filter((portafolio: any) => portafolio.creador === this.usuarioLoggeado.nombre);

  }
  
  mostrarPortafolios() {
    this.sportafolio.consultar().subscribe((portafolios: any) => {
      // Almacena los portafolios en tu variable uportafolio
      this.portafolio = portafolios;
    });

  }

  limpiar() {
    this.uportafolio.nombre = "";
    this.uportafolio.descripcion = "";
    this.uportafolio.tipo = "";
    this.uportafolio.creador = "";
  }
  // 2. Funcionalidad de la base de datos desde el servicio USER //
  consulta() {
    this.sportafolio.consultar().subscribe((result: any) => {
      // subscribe  para cargar en tiempo real
      this.portafolio = result;
      console.log(this.portafolio); //
      console.log("Se ha cargado el ARRAY portafolio correctamente", this.usuarioLoggeado);
    });
  }

  // 3. validar antes de ingresar dato
  validar() {
    if (this.uportafolio.nombre == "") {
      this.validanombre = false;
    } else {
      this.validanombre = true;
    }

    if (this.uportafolio.descripcion == "") {
      this.validadescripcion = false;
    } else {
      this.validadescripcion = true;
    }

    if (this.uportafolio.tipo == "") {
      this.validatipo = false;
    } else {
      this.validatipo = true;
    }

    if (this.uportafolio.creador == "") {
      this.validacreador= false;
    } else {
      this.validacreador = true;
    }
  }

  // 4.Crea la funcion ingresar, le agrega una rutina If de validacion true //
  // sacceder a una propiedad insertar del objeto PHP 
  ingresar() {
    this.validar();

    if (
      this.validanombre == true &&
      this.validadescripcion == true &&
      this.validatipo == true
    
    ) {
      // Asignar primero el creador como el nombre del usuario loggeado al campo creador
      this.uportafolio.creador = this.usuarioLoggeado.nombre;
      
      this.sportafolio.insertar(this.uportafolio).subscribe((datos: any) => {
        if (datos["resultado"] == "OK") {
          console.log("Datos insertados");
          console.log(this.portafolio);
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
      title: "Esta seguro de eliminar el usuario" + nombre + "?",
      text: "El proceso no podra ser revertido",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // llamar la funcio borrar id_usuario
        this.borrarportafolio(id);
        Swal.fire("Eliminado!", "El registro ha sido borrado.", "success");
      }
    });
  }

  borrarportafolio(id: any) {
    console.log(id);
    this.sportafolio.eliminar(id).subscribe((datos: any) => {
      if (datos["resultado"] == "OK") {
        this.consulta();
      }
    });
  }

  cargarDatos(datos: any, id: number) {
    if (datos.creador === this.usuarioLoggeado.nombre){
    console.log(datos);
    this.uportafolio.nombre = datos.nombre;
    this.uportafolio.descripcion = datos.descripcion;
    this.uportafolio.tipo = datos.tipo;
    this.uportafolio.creador = datos.creador;
    this.idportafolio = id;
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
      this.validadescripcion == true &&
      this.validatipo == true 

    ) {

      this.uportafolio.creador = this.usuarioLoggeado.nombre;
      this.sportafolio.edit(this.uportafolio, this.idportafolio).subscribe((datos: any) => {
          if (datos["resultado"] == "OK") {
            console.log("Datos insertados");
            console.log(this.portafolio);
            this.consulta();
          }
        });

      this.mostrar(0);
    }
  }



/* ///////////////////////LOGGIN //////////// */

obtenerUsuarioLoggeado() {
  // Obtiene los datos del usuario loggeado desde el almacenamiento local (sessionStorage)
  this.usuarioLoggeado = {
    id: sessionStorage.getItem('id'),
    nombre: sessionStorage.getItem('nombre'),
    usuario: sessionStorage.getItem('usuario'),
    tipo: sessionStorage.getItem('tipo')
    };
    console.log(this.usuarioLoggeado);
}
  
}
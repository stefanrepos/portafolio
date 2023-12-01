import { SuscripcionesService } from "./../../servicios/suscripciones.service";
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.scss']
})
  
  
export class SuscripcionesComponent implements OnInit{
  // CREAR UNAS VARIABLES GLOBALES //
  verf = false;
  tdservicios: any;
  datos: any;
  idservicio: any;
  area: any;
  moneda: any;
  usuarioLoggeado: any; // Variable para almacenar los datos del usuario loggeado
  mostrarTabla: boolean = false; // Variable para controlar la visibilidad de la tabla
  mostrarServicios: boolean = false;

    // Modelo NgModel Angular para capturar el array
  modelServicio = {
    nombre: "",
    descripcion: "",
    FO_areas: 0,
    precio: "",
    FO_moneda: 0,
    duracion: "",
    Imagen: "https://pixabay.com/es/vectors/error-404-error-panel-atenci%C3%B3n-3060993/",
    contacto: "",
    disponibilidad: "si",
    requisitos: "ninguno",
    fechaPuplic: "2023-10-19",
    creador:""
  };

  // variables para la validacion //

  validaNombre = true;
  validaDescripcion = true;
  validaFO_areas = true;
  validaPrecio = true;
  validaFO_moneda = true;
  validaDuracion = true;
  validacontacto = true;
  validaDisponibilidad = true;
  beditar = false;
  


constructor(private ssuscripciones:SuscripcionesService) { } // asignar un nombre glogal al servicio usuario //
  ngOnInit(): void {
    this.obtenerUsuarioLoggeado();
    this.consultaServicio();
    this.consultaArea();
    this.consultaMoneda();  
    console.log("En este instante el componente ha cargado, servicios, area, moneda");
    console.log(this.usuarioLoggeado);
}
// Funcionalidad del botón para mostrar u ocultar el formulario
mostrar(dato: any) {
  if (dato === 0) {
    this.verf = false;
    this.beditar = false;
    this.idservicio = "";
  } else if (dato === 1) {
    this.verf = true;
    console.log("insertar() está corriendo como true.");
  }
}

// Funcionalidad del botón para mostrar la tabla
mostrarTablaFunc() {
  this.mostrarTabla = true;
  this.verf = false; // Oculta el formulario al mostrar la tabla
  this.beditar = false;
  this.mostrarServicios = false;


}



mostrarMisServicios() {
    this.mostrarServicios = true;
    this.verf = false; // Oculta el formulario al mostrar la tabla
    this.beditar = false;
    this.mostrarTabla = false;
    this.tdservicios = this.tdservicios.filter((servicio: any) => servicio.creador === this.usuarioLoggeado.nombre);

}
mostrarLosServicios() {
  this.ssuscripciones.consultar().subscribe((servicios: any) => {
  this.tdservicios = servicios;
  });

}
  
// Funcionalidad de la base de datos desde el servicio // 
consultaServicio() {
    this.ssuscripciones.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
    this.tdservicios = result;
    console.log(this.tdservicios);//
    console.log("Se ha cargado el ARRAY correctamente");
  })
}
  
consultaArea() {
  this.ssuscripciones.consultara().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
  this.area = result;
  console.log(this.tdservicios);//
  console.log("Se ha cargado el ARRAY correctamente");
})
}
consultaMoneda() {
  this.ssuscripciones.consultarm().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
  this.moneda = result;
  console.log(this.tdservicios);//
  console.log("Se ha cargado el ARRAY correctamente");
})
}
  

  
   // limpiar despues de ejecutar
   limpiar() {
     this.modelServicio.nombre = "";
     this.modelServicio.descripcion = "";
     this.modelServicio.FO_areas = 0;

     this.modelServicio.precio = "";
     this.modelServicio.FO_moneda = 0;
     this.modelServicio.duracion = "";
     this.modelServicio.contacto = "";
     this.modelServicio.disponibilidad = "";
     this.modelServicio.fechaPuplic = "";

  }

  validar() {
    if (this.modelServicio.nombre == "") {
      this.validaNombre = false;
    } else {
      this.validaNombre = true;
    }
    if (this.modelServicio.descripcion == "") {
      this.validaDescripcion = false;
    } else {
      this.validaDescripcion = true;
   
    }
    if (this.modelServicio.precio == "") {
      this.validaPrecio = false;
    } else {  
      this.validaPrecio = true;
    }
    if (this.modelServicio.FO_moneda == 0) {
      this.validaFO_moneda = false;
    } else {
      this.validaFO_moneda = true;
    }
    if (this.modelServicio.duracion == "") {
      this.validaDuracion = false;
    } else {
      this.validaDuracion = true;
    }
    if (this.modelServicio.contacto == "") {
      this.validacontacto = false;
    } else {
      this.validacontacto = true;
    }
    if (this.modelServicio.disponibilidad == "") {
      this.validaDisponibilidad = false;
    } else {
      this.validaDisponibilidad = true;
    }

  }

  // 4.Crea la funcion ingresar, le agrega una rutina If de validacion true //
  // acceder a la propiedad 'insertar del objeto PHP  
  ingresar() {
    this.validar();
    /* let ca = Number(this.modelServicio.FO_areas);
    this.modelServicio.FO_areas = ca; */
    let ca = this.modelServicio.FO_areas;
    if (!isNaN(ca)) {
      // Si ca es un valor numérico, lo convertimos a número
      ca = Number(ca);
      this.modelServicio.FO_areas = ca;
    } else {
    
      // El valor ingresado no es un número, mostrar un mensaje de error 
      console.error('FO_areas no es un número válido');
    }

    console.log(this.modelServicio);

 if (
      this.validaNombre == true &&
      this.validaDescripcion == true &&
      this.validaFO_areas == true &&
      this.validaPrecio == true &&
      this.validaFO_moneda== true &&
      this.validaDuracion == true &&
      this.validacontacto== true &&
      this.validaDisponibilidad == true
    
 ) {
       // Asignar primero el creador como el nombre del usuario loggeado al campo creador
      this.modelServicio.creador = this.usuarioLoggeado.nombre;
   
      this.ssuscripciones.insertar(this.modelServicio).subscribe((datos: any) => {
        if (datos["resultado"] == "OK") {
          console.log("Datos insertados");
          console.log(this.tdservicios);
          this.consultaServicio();
        }
      });

      this.mostrar(0);
    } 
  } 

 //   rutina para eliminar registro
 borrarServicio(id: any) {
  console.log(id);
  this.ssuscripciones.eliminar(id).subscribe((datos: any) => {
    if (datos["resultado"] == "OK") {
      this.consultaServicio();
    }
  });
}
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
      this.borrarServicio(id);
      Swal.fire("Eliminado!", "El registro ha sido borrado.", "success");
    }
  });
 }
  
/*  ------Permitir  la edicion -al usuario loggeado--la sesion siempre debe estar ------------------  */
cargarDatos(datos: any, id: number) {
  if (datos.creador === this.usuarioLoggeado.nombre) {
    this.modelServicio.nombre = datos.nombre;
    this.modelServicio.descripcion = datos.descripcion;
    this.modelServicio.FO_areas = datos.FO_areas;
    this.modelServicio.precio = datos.precio;
    this.modelServicio.FO_moneda = datos.FO_moneda;
    this.modelServicio.duracion = datos.duracion;
    this.modelServicio.Imagen = datos.Imagen;
    this.modelServicio.contacto = datos.contacto;
    this.modelServicio.requisitos = datos.requisitos;
    this.modelServicio.disponibilidad = datos.disponibilidad;
    this.idservicio = id;
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
    this.validaNombre == true &&
    this.validaDescripcion == true &&
    this.validaFO_areas == true &&
    this.validaPrecio == true &&
    this.validaFO_moneda == true &&
    this.validaDuracion == true &&
    this.validacontacto == true &&
    this.validaDisponibilidad == true
  ) {
    this.modelServicio.creador = this.usuarioLoggeado.nombre;
    this.ssuscripciones.edit(this.modelServicio, this.idservicio).subscribe((datos: any) => {
        if (datos["resultado"] == "OK") {
          console.log("Datos insertados");
          console.log(this.tdservicios);
          this.consultaServicio();
        }
      });

    this.mostrar(0);
  }
}


/*   ////////////////////////CARGAR DATO USUARIO LOGGEADO //////////////
 */ 
  
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
  
/*   ////////////////////////CARGAR DATO USUARIO LOGGEADO //////////////
 */  

}
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

    // Modelo NgModel Angular para capturar el array
  modelServicio = {
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    moneda: "",
    duracion: "",
    Imagen: "",
    destacado: "NO",
    disponibilidad: "SI",
    requisitos: "",
    fechaPuplic: ""
  };

  // variables para la validacion //

  validaNombre = true;
  validaDescripcion = true;
  validaCategoria = true;
  validaPrecio = false;
  validaMoneda = false;
  validaDuracion = false;
  validaDestacado = false;
  validaDisponibilidad = false;
  beditar= false;


constructor(private ssuscripciones:SuscripcionesService) { } // asignar un nombre glogal al servicio usuario //
  ngOnInit(): void {
  
  this.consultaServicio();


  console.log("En este instante el componente ha cargado");
}

  //Funcionalidad del boton - mostrar el formulario recibe un dato , si es cero se oculta si es 1 no debe ocultarse//
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idservicio = "";
        break;
      case 1:
        this.verf = true;
        console.log("insertar() esta corriendo como true.");
        break;
    }
  }
// Funcionalidad de la base de datos desde el servicio USER // 
consultaServicio() {
    this.ssuscripciones.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
    this.tdservicios = result;
    console.log(this.tdservicios);//
    console.log("Se ha cargado el ARRAY correctamente");
  })
}
  
   // limpiar despues de ejecutar
   limpiar() {
     this.tdservicios.nombre = "";
     this.tdservicios.descripcion = "";
     this.tdservicios.categoria = "";
     this.tdservicios.precio = "";
     this.tdservicios.moneda = "";
     this.tdservicios.duracion = "";
     this.tdservicios.Imagen = "";
     this.tdservicios.destacado = "";
     this.tdservicios.disponibilidad = "";
     this.tdservicios.requisitos = "";
     this.tdservicios.fechaPuplic = "";

  }

  validar() {
    if (this.tdservicios.nombre == "") {
      this.validaNombre = false;
    } else {
      this.validaNombre = true;
    }
    if (this.tdservicios.descripcion == "") {
      this.validaDescripcion = false;
    } else {
      this.validaDescripcion = true;
    }
    if (this.tdservicios.categoria == "") {
      this.validaCategoria = false;
    } else {
      this.validaCategoria = true;
    }
    if (this.tdservicios.precio == "") {
      this.validaPrecio = false;
    } else {
      this.validaPrecio = true;
    }
    if (this.tdservicios.modena == "") {
      this.validaMoneda = false;
    } else {
      this.validaMoneda = true;
    }
    if (this.tdservicios.duracion == "") {
      this.validaDuracion = false;
    } else {
      this.validaDuracion = true;
    }
    if (this.tdservicios.destacado == "") {
      this.validaDestacado = false;
    } else {
      this.validaDestacado = true;
    }
    if (this.tdservicios.disponibilidad == "") {
      this.validaDisponibilidad = false;
    } else {
      this.validaDisponibilidad = true;
    }

  }

  // 4.Crea la funcion ingresar, le agrega una rutina If de validacion true //
  // acceder a la propiedad 'insertar del objeto PHP ssoporte 
  ingresar() {
    this.validar();

    if (
      this.validaNombre == true &&
      this.validaDescripcion == true &&
      this.validaCategoria == true &&
      this.validaPrecio == true &&
      this.validaMoneda == true &&
      this.validaDuracion == true &&
      this.validaDestacado == true &&
      this.validaDisponibilidad == true
    
    ) {
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
cargarDatos(datos: any, id: number) {
  console.log(datos);
  this.modelServicio.nombre = datos.nombre;
  this.modelServicio.descripcion = datos.descripcion;
  this.modelServicio.categoria = datos.categoria;
  this.modelServicio.precio = datos.precio;
  this.modelServicio.moneda = datos.moneda;
  this.modelServicio.duracion = datos.duracion;
  this.modelServicio.Imagen = datos.Imagen;
  this.modelServicio.destacado = datos.destacado;
  this.modelServicio.requisitos = datos.requisitos;
  this.modelServicio.disponibilidad = datos.disponibilidad;
  this.idservicio = id;
  this.mostrar(1);
  this.beditar = true;
}

editar() {
  this.validar();

  if (
    this.validaNombre == true &&
    this.validaDescripcion == true &&
    this.validaCategoria == true &&
    this.validaPrecio == true &&
    this.validaMoneda == true &&
    this.validaDuracion == true &&
    this.validaDestacado == true &&
    this.validaDisponibilidad == true
  ) {
    this.ssuscripciones
      .edit(this.modelServicio, this.idservicio)
      .subscribe((datos: any) => {
        if (datos["resultado"] == "OK") {
          console.log("Datos insertados");
          console.log(this.tdservicios);
          this.consultaServicio();
        }
      });

    this.mostrar(0);
  }
}








}
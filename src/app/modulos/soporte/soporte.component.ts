import { SoporteService } from "./../../servicios/soporte.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-soporte",
  templateUrl: "./soporte.component.html",
  styleUrls: ["./soporte.component.scss"],
})
export class SoporteComponent implements OnInit {
  // CREAR UNAS VARIABLES GLOBALES //
  verf = false;
  tsoportes: any;
  datos: any;
  idsoporte: any;

  // Modelo NgModel Angular para capturar el array
  msoporte = {
    contacto: "",
    categoria: "",
    tipo: "",
    estado: "activo",
    plazo: "5",
    prioridad: "",
    asignacion: "SAT",
    fecha_creacion: "2023/10/10",
    fecha_actualizacion: "",
    fecha_cierre: "2023/10/15",
  };

  // variables para la validacion //

  validaContacto = true;
  validaCategoria = true;
  validaTipo = true;
  beditar = false;

  constructor(private ssoporte: SoporteService) {} // asignar un nombre glogal al servicio usuario //
  ngOnInit(): void {
    this.consultaSoporte();
    console.log("En este instante el componente ha cargado");
  }
  //Funcionalidad del boton - mostrar el formulario recibe un dato , si es cero se oculta si es 1 no debe ocultarse//
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idsoporte = "";
        break;
      case 1:
        this.verf = true;
        console.log(" insertar() esta corriendo como true.");
        break;
    }
  }
  // Funcionalidad de la base de datos desde el servicio USER //
  // traer la tabla tsoportes
  consultaSoporte() {
    this.ssoporte.consultar().subscribe((result: any) => {
      // subscribe  para cargar en tiempo real
      this.tsoportes = result;
      console.log(this.tsoportes);
      console.log("Se ha cargado el ARRAY correctamente");
    });
  }
 // limpiar despues de ejecutar
  limpiar() {
    this.msoporte.contacto = "";
    this.msoporte.categoria = "";
    this.msoporte.tipo = "";
  }
  // funcion validar para el formulario 
  validar() {
    if (this.msoporte.contacto == "") {
      this.validaContacto = false;
    } else {
      this.validaContacto = true;
    }
    if (this.msoporte.categoria == "") {
      this.validaCategoria = false;
    } else {
      this.validaCategoria = true;
    }
    if (this.msoporte.tipo == "") {
      this.validaTipo = false;
    } else {
      this.validaTipo = true;
    }

  }
  // 4.Crea la funcion ingresar, le agrega una rutina If de validacion true //
  // acceder a la propiedad 'insertar del objeto PHP ssoporte 
  ingresar() {
    this.validar();

    if (
      this.validaContacto == true &&
      this.validaCategoria == true &&
      this.validaTipo == true
    ) {
      this.ssoporte.insertar(this.msoporte).subscribe((datos: any) => {
        if (datos["resultado"] == "OK") {
          console.log("Datos insertados");
          console.log(this.tsoportes);
          this.consultaSoporte();
        }
      });

      this.mostrar(0);
    }
  }

  //   rutina para eliminar registro
  borrarticket(id: any) {
    console.log(id);
    this.ssoporte.eliminar(id).subscribe((datos: any) => {
      if (datos["resultado"] == "OK") {
        this.consultaSoporte();
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
        this.borrarticket(id);
        Swal.fire("Eliminado!", "El registro ha sido borrado.", "success");
      }
    });
  }
  cargarDatos(datos: any, id: number) {
    console.log(datos);
    this.msoporte.contacto = datos.contacto;
    this.msoporte.categoria = datos.categoria;
    this.msoporte.tipo = datos.soporte;
    this.idsoporte = id;
    this.mostrar(1);
    this.beditar = true;
  }

  editar() {
    this.validar();

    if (
      this.validaContacto == true &&
      this.validaCategoria == true &&
      this.validaTipo == true 
    ) {
      this.ssoporte
        .edit(this.msoporte, this.idsoporte)
        .subscribe((datos: any) => {
          if (datos["resultado"] == "OK") {
            console.log("Datos insertados");
            console.log(this.tsoportes);
            this.consultaSoporte();
          }
        });

      this.mostrar(0);
    }
  }






}

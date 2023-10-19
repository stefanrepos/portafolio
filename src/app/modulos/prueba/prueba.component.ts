import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/servicios/pruebas.service';
import { CanalesService } from 'src/app/servicios/canales.service'; 





@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit{
  // CREAR UNAS VARIABLES GLOBALES //
  mostrarFormulario = false;
  usuario: any;
  datos: any;
  iduser: any;
  usuarioLoggeado: any; // Variable para almacenar los datos del usuario loggeado
  usuariosFiltrados: any[] = []; // Arreglo para almacenar los usuarios filtrados

  usuarios: any[] = [];
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

  // importar los servicios 
  constructor(private spruebas:PruebasService, private scanales:CanalesService) { } // asignar un nombre glogal al servicio usuario //
      
  ngOnInit(): void {
        this.consultap();
        this.consultacanal();
   
        console.log("En este instante el componente ha cargado");
      }

      //Funcionalidad del boton - mostrar el formulario recibe un dato , si es cero se oculta si es 1 no debe ocultarse//
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
      // Funcionalidad de la base de datos desde el servicio USER // 
      consultap() {
        this.spruebas.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
          this.usuario = result;
          console.log(this.usuario);//
          console.log("Se ha cargado el ARRAY correctamente");
        })
  
      }
      
  
      consultacanal() {
        this.scanales.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
          this.usuario = result;
          console.log(this.usuario);//
          console.log("Se ha cargado el ARRAY correctamente");
        })
  
      }
  
/*       recuentos() {
        this.spruebas.recuento().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
          this.recuento = result;
          console.log(this.recuento);//
          console.log("Se ha cargado el ARRAY correctamente");
        })
  
      } */
  
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
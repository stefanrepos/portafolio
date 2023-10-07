import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/servicios/pruebas.service';
import { CanalesService } from 'src/app/servicios/canales.service'; 





@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit{
  // definir unas variables globales aca va el array 
  verf = false;
  canales: any;
  areas: any;
  recuento: any;
  
  // crear el modelo en angular ngModel para luego ser referenciado cada variable en los imput del form // 
  user = {
    nombre: "",
    usuario: "",
    clave: "",
    tipo: ""
  };
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
            this.verf = false;
            break;
          case 1:
            this.verf = true;
            break;
        }
        
      }

      // Funcionalidad de la base de datos desde el servicio USER // 
      consultap() {
        this.spruebas.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
          this.areas = result;
          console.log(this.areas);//
          console.log("Se ha cargado el ARRAY correctamente");
        })
  
      }
      
  
      consultacanal() {
        this.scanales.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
          this.canales = result;
          console.log(this.canales);//
          console.log("Se ha cargado el ARRAY correctamente");
        })
  
      }
  
      recuentos() {
        this.spruebas.recuento().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
          this.recuento = result;
          console.log(this.recuento);//
          console.log("Se ha cargado el ARRAY correctamente");
        })
  
      }
  
      
  
    }
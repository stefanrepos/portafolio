import { Component, OnInit } from '@angular/core';
import { SalentService } from 'src/app/servicios/salent.service';

@Component({
  selector: 'app-salent',
  templateUrl: './salent.component.html',
  styleUrls: ['./salent.component.scss']
})
export class SalentComponent implements OnInit {
  // CREAR UNAS VARIABLES GLOBALES // 
  //

  verf = false;
  interesados: any;
  datos: any;

  constructor(private ssalent:SalentService) { } // asignar un nombre glogal al servicio usuario //
      
   ngOnInit(): void {
     this.consulta();
     console.log("En este instante el componente ha cargado");
   }
  
  // 1. Funcionalidad del boton - mostrar el formulario recibe un dato , si es cero se oculta si es 1 no debe ocultarse//
  mostrar(dato: any) {
    if (dato === 1) {
        this.consulta(); // Llama a la función de consulta cuando se hace clic en "Ver"
    }
    this.verf = dato === 1; // Muestra la tabla solo si `dato` es igual a 1
  }
  ocultar() {
    this.verf = false; // Oculta la tabla cuando se llama a esta función
}
  
  // 2. Funcionalidad de la base de datos desde el servicio USER // 
  consulta() {
  this.ssalent.consultar().subscribe((result: any) => {// subscribe  para cargar en tiempo real 
  this.interesados = result;
  console.log(this.interesados);//
    console.log("Se ha cargado el ARRAY correctamente");


  });
   
  }

}
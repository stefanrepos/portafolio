import { Component, OnInit } from '@angular/core';
import { SuscripcionesService } from 'src/app/servicios/suscripciones.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.scss']
})
  
  
export class SuscripcionesComponent implements OnInit{
// definir unas variables globales aca va el array 
verf = false;
soportes: any;

constructor(private ssuscripciones:SuscripcionesService) { } // asignar un nombre glogal al servicio usuario //
ngOnInit(): void {
  this.consultas();

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
    consultas() {
    this.ssuscripciones.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
    this.soportes = result;
    console.log(this.soportes);//
    console.log("Se ha cargado el ARRAY correctamente");
  })

}


}

import { PortafoliosService } from 'src/app/servicios/portafolios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.scss']
})
export class PortafoliosComponent implements OnInit{

  // definir las variables 
  verf = false;
  listaPortafolio: any;
  
  constructor(private sportafolio:PortafoliosService) { }

  ngOnInit(): void {
    this.consultap();
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
    this.sportafolio.consultar().subscribe((result: any) =>  {// subscribe  para cargar en tiempo real 
      this.listaPortafolio = result;
      console.log(this.listaPortafolio);//
      console.log("Se ha cargado el ARRAY correctamente");
    })

  }
  
}
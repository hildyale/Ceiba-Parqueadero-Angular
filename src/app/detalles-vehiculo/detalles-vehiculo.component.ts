import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { DetallesService } from "../detalles.service"
import {Router} from "@angular/router"
import swal from 'sweetalert';

@Component({
  selector: 'app-detalles-vehiculo',
  templateUrl: './detalles-vehiculo.component.html',
  styleUrls: ['./detalles-vehiculo.component.scss']
})
export class DetallesVehiculoComponent implements OnInit {

  vehiculo;
  respuesta$: any = {messsage:""};

  constructor(private vehiculosService: VehiculosService, private detallesServices: DetallesService, private router : Router) {
    console.log("%c contructor","color:orange;font-size:16px;")
    !this.detallesServices.serviceData && this.router.navigate(['lista']); 
   }

  ngOnInit() {
    console.log("%c onInit","color:orange;font-size:16px;")
    console.log(this.detallesServices.serviceData)
    this.vehiculo = this.detallesServices.serviceData;
  }

  salidaVehiculo(){
    this.vehiculosService.salidaVehiculos(this.vehiculo.placa).subscribe(
      (data) => {
        this.respuesta$ =  data;
        swal( "Valor a pagar: "+this.respuesta$.message,"Vehiculo Borrado Exitosamente","success").then(()=>{
          this.router.navigate(['lista']); 
        });
        console.log(data) 
      },
      (error) => { 
        this.respuesta$ = error.error;
        swal("", this.respuesta$.message, "error");
        swal( this.respuesta$.message,"","error").then(()=>{
          this.router.navigate(['lista']); 
        });
        console.log(error.error) 
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import {Router} from "@angular/router"
import { DetallesService } from "../detalles.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {

  vehiculos$: Object;

  constructor(private vehiculosService: VehiculosService, private router: Router, private detallesServices: DetallesService) { }

  ngOnInit() {
    this.vehiculosService.obtenerVehiculos().subscribe(
      data => this.vehiculos$ = data
    )
  }

  detalles(Object){
    //console.log(JSON.stringify(Object))
    this.detallesServices.serviceData = Object;
    this.router.navigate(['detalles'])
  }

}

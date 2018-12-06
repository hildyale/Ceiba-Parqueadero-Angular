import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {

  vehiculos$: Object;

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit() {
    this.vehiculosService.obtenerVehiculos().subscribe(
      data => this.vehiculos$ = data
    )
  }

}

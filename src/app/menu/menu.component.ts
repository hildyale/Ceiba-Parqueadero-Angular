import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {

  }

}

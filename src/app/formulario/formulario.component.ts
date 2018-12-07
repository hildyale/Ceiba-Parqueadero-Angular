import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  vehiculoForm = new FormGroup({
    placa: new FormControl(''),
    tipo: new FormControl(''),
    cilindraje: new FormControl(''),
    modelo: new FormControl(''),
    color: new FormControl(''),
    clase: new FormControl(''),
    marca: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.vehiculoForm.value);
    
  }

}

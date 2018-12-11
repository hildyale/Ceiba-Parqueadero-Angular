import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { VehiculoService } from '../vehiculo.service';
import {Router} from "@angular/router";
import swal from 'sweetalert';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  respuesta$: any = {messsage:""};
  vehiculoForm = new FormGroup({
    placa: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    tipo: new FormControl('carro'),
    cilindraje: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    modelo: new FormControl('', [Validators.maxLength(40)]),
    color: new FormControl('', [Validators.required, Validators.maxLength(40),Validators.pattern('^[a-zA-Z]*$')]),
    clase: new FormControl('', [Validators.required, Validators.maxLength(40),Validators.pattern('^[a-zA-Z]*$')]),
    marca: new FormControl('',[Validators.required, Validators.maxLength(40),Validators.pattern('^[a-zA-Z]*$')])
  });

  constructor(private vehiculoService : VehiculoService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.vehiculoForm.value);
    this.vehiculoService.registrarVehiculo(this.vehiculoForm.value).subscribe(
      (data) => {
        
        this.respuesta$ =  data;
        swal( "",this.respuesta$,"success").then(()=>{
          this.router.navigate(['lista']); 
        });
        console.log("%c data","color:orange;font-size:16px;") 
        console.log(data)
      },
      (error) => { 
        console.log("%c error","color:orange;font-size:16px;")
        console.log(error)
        this.respuesta$ = error.error;
        swal( this.respuesta$.message,"","error").then(()=>{
          //this.router.navigate(['lista']); 
        });
    });
  }

}

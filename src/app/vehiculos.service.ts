import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  url = "http://localhost:8080/vehiculos/";
  constructor(private http: HttpClient) {}

  obtenerVehiculos(){
    return this.http.get(this.url+"detalles");
  }

}

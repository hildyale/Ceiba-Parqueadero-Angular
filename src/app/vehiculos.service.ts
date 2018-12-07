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

  registrarVehiculo(body){
    return this.http.post(this.url,body);
  }

  salidaVehiculos(placa){
    return this.http.delete(this.url+placa);
  }

}

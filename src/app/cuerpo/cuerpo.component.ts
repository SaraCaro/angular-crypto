import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccesoDatosApiService } from '../acceso-datos-api.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  page = 1;
  pageSize = 10;

  seleccionMoneda = new Array();

  constructor(public datosApi: AccesoDatosApiService){}

  monedaSeleccionada(moneda:any){
    this.seleccionMoneda.push(moneda);
    localStorage.setItem("moneda", JSON.stringify(this.seleccionMoneda));
  }

  ngOnInit(){
    if(localStorage.getItem("moneda") != null)
      this.seleccionMoneda = JSON.parse(localStorage.getItem("moneda")!);
    else
      this.seleccionMoneda = new Array();
  }
}

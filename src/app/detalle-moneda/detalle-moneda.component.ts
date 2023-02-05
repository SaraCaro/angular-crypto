import { Component } from '@angular/core';
import { AccesoDatosApiService } from '../acceso-datos-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent {

  datoMoneda: any;
  id: any;

  constructor(public datosApi: AccesoDatosApiService, private router: ActivatedRoute) { 
    this.id = this.router.snapshot.paramMap.get('id');
    this.datosApi.obtenerMoneda(this.id).subscribe(
      (data: any) => {
        this.datoMoneda = data;
      })
  }
}

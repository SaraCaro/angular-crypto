import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'detalle-moneda/:id', component: DetalleMonedaComponent },
  { path: 'cuerpo', component: CuerpoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { VentaComponent } from './components/venta/venta.component';
import { ServenComponent } from './components/serven/serven.component';
import { ClicomComponent } from './components/clicom/clicom.component';

const routes: Routes = [
  {
    path:'',
    component: VentaComponent
  },
  {
    path:'servmasven',
    component: ServenComponent
  },
  {
    path:'climascom',
    component: ClicomComponent
  },
  {
    path:'prod',
    component: ProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

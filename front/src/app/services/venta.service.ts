import { Injectable } from '@angular/core';
import { Venta } from '../models/venta'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  URL_API ='http://localhost:4000/registrar-venta'

  selectedVenta: Venta = {
    monto: '',
    productos: [''],
    nombrec: ''
  };

  constructor(private http: HttpClient) {}

  createVenta(venta: Venta) {
    return this.http.post(this.URL_API, {
      monto: venta.monto,
      productos: [venta.productos],
      nombrec: venta.nombrec
    })
  }

}

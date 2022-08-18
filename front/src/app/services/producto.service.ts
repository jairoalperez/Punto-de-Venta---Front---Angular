import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Producto, EProducto} from '../models/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_APIM ='http://localhost:4000/mostrar-producto'

  URL_APIR ='http://localhost:4000/registrar-producto'

  productos: Producto[]

  selectedProductor: EProducto = {
    nombrep: '',
    valorp: ''
  };

  constructor(private http: HttpClient) {} 

  getProductos() {
    return this.http.get<Producto[]>(this.URL_APIM)
  }

  createProducto(productor: EProducto) {
    return this.http.post(this.URL_APIR, {
      nombrep: productor.nombrep,
      valorp: productor.valorp
    })
  }

}

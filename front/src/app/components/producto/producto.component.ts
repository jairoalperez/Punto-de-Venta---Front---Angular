import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos() {
    this.productoService.getProductos().subscribe(
      res => {
        this.productoService.productos = res
      },
      err => console.log('Fallo la conexion'+err) 
    )
  }

  addProducto(form: NgForm) {
    this.productoService.createProducto(form.value).subscribe(
      res => {
        alert('Registro Exitoso!')
        console.log(res)
        this.getProductos()
      },
      err => {
        alert('Error al ingresar el servicio (Conexion)')
        console.log(err)
      }
    )
  }

}

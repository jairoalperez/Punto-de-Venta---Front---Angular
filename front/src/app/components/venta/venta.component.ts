import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service'
import { VentaService } from 'src/app/services/venta.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor(public productoService: ProductoService, public ventaService: VentaService) { }

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

  addVenta(form: NgForm) {
    this.ventaService.createVenta(form.value).subscribe(
      res => {
        alert('Registro Exitoso!')
        console.log(res)
      },
      err => {
        alert('Error al crear la venta (Conexion)')
        console.log(err)
      }
    )
  }

}

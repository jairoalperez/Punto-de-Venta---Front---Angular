import { Component, OnInit } from '@angular/core';
import { ServenService } from 'src/app/services/serven.service';

@Component({
  selector: 'app-serven',
  templateUrl: './serven.component.html',
  styleUrls: ['./serven.component.css']
})
export class ServenComponent implements OnInit {

  constructor(public servenService: ServenService) { }

  ngOnInit(): void {
    this.getServen()
  }

  getServen() {
    this.servenService.getServen().subscribe(
      res => {
        this.servenService.servens = res
      },
      err => console.log('Fallo la conexion'+err) 
    )
  }

}

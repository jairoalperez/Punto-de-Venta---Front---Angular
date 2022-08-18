import { Component, OnInit } from '@angular/core';
import { ClicomService } from 'src/app/services/clicom.service';

@Component({
  selector: 'app-clicom',
  templateUrl: './clicom.component.html',
  styleUrls: ['./clicom.component.css']
})
export class ClicomComponent implements OnInit {

  constructor(public clicomService: ClicomService) { }

  ngOnInit(): void {
    this.getClicom()
  }

  getClicom() {
    this.clicomService.getClicom().subscribe(
      res => {
        this.clicomService.clicoms = res
      },
      err => console.log('Fallo la conexion'+err) 
    )
  }

}

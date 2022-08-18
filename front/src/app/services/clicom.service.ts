import { Injectable } from '@angular/core';
import { Clicom } from '../models/clicom';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClicomService {

  URL_API ='http://localhost:4000/mostrar-climascom'

  clicoms: Clicom[]

  constructor(private http: HttpClient) { }

  getClicom() {
    return this.http.get<Clicom[]>(this.URL_API)
  }

}

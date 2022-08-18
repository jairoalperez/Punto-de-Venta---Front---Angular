import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Serven} from '../models/serven'

@Injectable({
  providedIn: 'root'
})
export class ServenService {

  URL_API ='http://localhost:4000/mostrar-servmasven'

  servens: Serven[]

  constructor(private http: HttpClient) { }

  getServen() {
    return this.http.get<Serven[]>(this.URL_API)
  }

}

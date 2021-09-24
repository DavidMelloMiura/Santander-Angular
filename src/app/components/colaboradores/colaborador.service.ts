import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from './colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  baseUrl = "http://localhost:3001/colaboradores"

  constructor(private http: HttpClient) { }


  create(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.baseUrl, colaborador)
  }

  showMessage(msg: string): void {
    console.log(msg)
  }



}

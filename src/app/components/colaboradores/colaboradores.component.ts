import { ColaboradorService } from './colaborador.service';
import { Colaborador } from './colaborador.model';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})

export class ColaboradoresComponent implements OnInit {

  colaborador: Colaborador[] = [];

  constructor(private serviceGet: ColaboradorService) { }

  ngOnInit(): void {
    this.serviceGet.lista().subscribe(console.log);
    this.serviceGet.lista().subscribe(dados => this.colaborador = dados);



  }

}

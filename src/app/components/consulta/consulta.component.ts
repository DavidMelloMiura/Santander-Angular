
import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaboradores/colaborador.model';
import { ColaboradorService } from '../colaboradores/colaborador.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  colaborador: Colaborador[] = [];
  nome = '';




  constructor(private serviceGet: ColaboradorService) { }

  ngOnInit(): void {
    this.serviceGet.lista().subscribe(console.log);
  }

  consulta(){
    

  }

}


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
    this.colaborador = [];
    /* this.serviceGet.lista().subscribe(console.log); */
    /* this.serviceGet.lista().subscribe(dados => this.colaborador = dados); */


  }

  mostrar(){
    this.serviceGet.lista().subscribe(dados => this.colaborador = dados);
    
  }

  consulta(){

    if (this.nome != ""){
    }else if (this.nome == ""){
      this.ngOnInit();
    }

    this.colaborador = this.colaborador.filter(res=> {
      return res.nome.toLocaleLowerCase().match(this.nome.toLocaleLowerCase());
    })

  }

}

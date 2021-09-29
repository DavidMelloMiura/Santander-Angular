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
  nome = '';


  constructor(private serviceGet: ColaboradorService) { }

  ngOnInit(): void {
    /* this.serviceGet.lista().subscribe(console.log); */
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

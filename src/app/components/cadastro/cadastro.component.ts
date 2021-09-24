import { ColaboradorService } from './../colaboradores/colaborador.service';

import { Component, OnInit } from '@angular/core';

import { Colaborador } from '../colaboradores/colaborador.model';





@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  colaborador: Colaborador = {
    nome: 'David',
    sobrenome: 'Miura',
    cargo:'Desenvolvedor FullStack',
    dataNascimento: '26/10/1981',
    endereco: 'Rua sete'
  }



  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
  }

  createColaborador(): void{
    this.colaboradorService.create(this.colaborador).subscribe(() => {
      this.colaboradorService.showMessage('Colaborador Criado com sucesso')

    })
  }




}

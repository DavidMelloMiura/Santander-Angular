import { ColaboradorService } from './colaborador.service';
import { Colaborador } from './colaborador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})

export class ColaboradoresComponent implements OnInit {

  /*
  colaborador: Colaborador = {
    nome: 'David',
    sobrenome: 'Miura',
    cargo:'Desenvolvedor FullStack',
    dataNascimento: '26/10/1981',
    endereco: 'Narnia'
  }
*/
  
  constructor() { }

  ngOnInit(): void {
  }

  /*
  createColaborador(): void{
    this.colaboradorService.create(this.colaborador).subscribe(() => {
      this.colaboradorService.showMessage('Colaborador Criaddo com sucesso')

    })
  }
  */
}

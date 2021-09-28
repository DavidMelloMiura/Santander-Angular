import { ColaboradorService } from './../colaboradores/colaborador.service';
import { Component, OnInit, Output } from '@angular/core';
import { Colaborador } from '../colaboradores/colaborador.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output()
  colaborador: Colaborador = {
    nome: '',
    sobrenome: '',
    cargo:'',
    dataNascimento: '',
    endereco: ''
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

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborador-item',
  templateUrl: './colaborador-item.component.html',
  styleUrls: ['./colaborador-item.component.css']
})
export class ColaboradorItemComponent implements OnInit {

  constructor() { }

  cursos: string[] = ["Angular", "Java", "Typescript", "FrontEnd", "Backend"]

  @Input()
  colaborador!: { nome: string; sobrenome: string; cargo: string; dataNascimento: string; endereco: string; }



  ngOnInit(): void {
    this.colaborador = {
      nome: 'Teste de input',
      sobrenome: 'Teste input sobrenome',
      cargo: '',
      dataNascimento: '',
      endereco: ''
    }


  }

}

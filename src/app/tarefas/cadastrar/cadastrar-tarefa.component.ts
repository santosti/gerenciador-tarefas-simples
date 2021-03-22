import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss'],
})
export class CadastrarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) {}

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrarTarefa(): void {
    if (this.formTarefa.form.valid) {
      console.log('cai aqui 2', this.tarefa);
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
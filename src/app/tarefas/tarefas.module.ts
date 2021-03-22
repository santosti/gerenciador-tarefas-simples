import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService],
})
export class TarefasModule {}

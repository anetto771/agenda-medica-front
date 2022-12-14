import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './agendamentos.component';
import { AgendamentosCreateComponent } from './childrens/agendamentos-create/agendamentos-create.component';
import { AgendamentosUpdateComponent } from './childrens/agendamentos-update/agendamentos-update.component';

const routes: Routes = [
  { path: '', 
  component: AgendamentosComponent 
  },
  {
    path: 'new',
    component: AgendamentosCreateComponent
  },
  {
    path: "edit/:id",
    component: AgendamentosUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentosRoutingModule { }

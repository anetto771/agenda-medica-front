import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteCreateComponent } from './childrens/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './childrens/paciente-update/paciente-update.component';
import { PacientesComponent } from './pacientes.component';

const routes: Routes = [
  { 
    path: '', 
    component: PacientesComponent 
  },
  { 
    path: 'new', 
    component: PacienteCreateComponent
  },
  { 
    path: 'edit/:id', 
    component: PacienteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }

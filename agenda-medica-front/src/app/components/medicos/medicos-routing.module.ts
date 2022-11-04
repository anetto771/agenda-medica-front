import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoCreateComponent } from './childrens/medico-create/medico-create.component';
import { MedicoUpdateComponent } from './childrens/medico-update/medico-update.component';
import { MedicosComponent } from './medicos.component';

const routes: Routes = [
  { 
    path: '', 
    component: MedicosComponent 
  },
  { 
    path: 'new', 
    component: MedicoCreateComponent
  },
  { 
    path: 'edit/:id', 
    component: MedicoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }

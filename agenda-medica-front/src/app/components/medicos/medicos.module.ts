import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './medicos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MedicoCreateComponent } from './childrens/medico-create/medico-create.component';


@NgModule({
  declarations: [
    MedicosComponent,
    MedicoCreateComponent
    
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    MaterialModule,
    NavBarModule
  ],
  exports: [
    MedicosComponent,
    MedicoCreateComponent
    
  ]
})
export class MedicosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosComponent } from './agendamentos.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AgendamentosCreateComponent } from './childrens/agendamentos-create/agendamentos-create.component';


@NgModule({
  declarations: [
    AgendamentosComponent,
    AgendamentosCreateComponent
  ],
  imports: [
    CommonModule,
    AgendamentosRoutingModule,
    NavBarModule,
    MaterialModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [
    AgendamentosComponent,
    AgendamentosCreateComponent
  ]
})
export class AgendamentosModule { }

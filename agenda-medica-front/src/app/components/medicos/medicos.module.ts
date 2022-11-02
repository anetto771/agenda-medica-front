import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './medicos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    MedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    MaterialModule
  ],
  exports: [
    MedicosComponent
  ]
})
export class MedicosModule { }

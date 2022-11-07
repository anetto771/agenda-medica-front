import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PacientesComponent } from './pacientes.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { PacienteCreateComponent } from './childrens/paciente-create/paciente-create.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { PacienteUpdateComponent } from './childrens/paciente-update/paciente-update.component';
import { PacientesRoutingModule } from './pacientes-routing.module';


@NgModule({
  declarations: [
    PacientesComponent,
    PacienteCreateComponent,
    PacienteUpdateComponent
    
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    MaterialModule,
    NavBarModule,
    MatTableModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    PacientesComponent,
    PacienteCreateComponent,
    PacienteUpdateComponent
    
  ]
})
export class PacientesModule { }

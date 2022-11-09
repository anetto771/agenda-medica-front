import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './medicos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MedicoCreateComponent } from './childrens/medico-create/medico-create.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { MedicoUpdateComponent } from './childrens/medico-update/medico-update.component';
import { MedicoDetailsComponent } from './medico-details/medico-details.component';


@NgModule({
  declarations: [
    MedicosComponent,
    MedicoCreateComponent,
    MedicoUpdateComponent,
    MedicoDetailsComponent
    
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    MaterialModule,
    NavBarModule,
    MatTableModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    MedicosComponent,
    MedicoCreateComponent,
    MedicoUpdateComponent,
    MedicoDetailsComponent
    
  ]
})
export class MedicosModule { }

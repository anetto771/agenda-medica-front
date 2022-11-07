import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UsuariosComponent } from './usuarios.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';

import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { UsuarioUpdateComponent } from './childrens/usuario-update/usuario-update.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioCreateComponent } from './childrens/usuario-create/usuario-create.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent
    
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    NavBarModule,
    MatTableModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    UsuariosComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent
    
  ]
})
export class UsuariosModule { }

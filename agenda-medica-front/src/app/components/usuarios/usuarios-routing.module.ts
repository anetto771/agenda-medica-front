import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCreateComponent } from './childrens/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './childrens/usuario-update/usuario-update.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  { 
    path: '', 
    component: UsuariosComponent 
  },
  { 
    path: 'new', 
    component: UsuarioCreateComponent
  },
  { 
    path: 'edit/:id', 
    component: UsuarioUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }

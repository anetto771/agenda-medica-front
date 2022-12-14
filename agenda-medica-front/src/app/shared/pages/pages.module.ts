import { NgModule } from '@angular/core';
import { AgendamentosModule } from 'src/app/components/agendamentos/agendamentos.module';
import { HomeModule } from 'src/app/components/home/home.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { MedicosModule } from 'src/app/components/medicos/medicos.module';
import { PacientesModule } from 'src/app/components/pacientes/pacientes.module';
import { RegistrosModule } from 'src/app/components/registros/registros.module';

import { UsuariosModule } from 'src/app/components/usuarios/usuarios.module';






@NgModule({
  exports:[
    HomeModule,
    LoginModule,
    MedicosModule,
    PacientesModule,
    UsuariosModule,
    AgendamentosModule,
    RegistrosModule
    
  ]
})
export class PagesModule { }

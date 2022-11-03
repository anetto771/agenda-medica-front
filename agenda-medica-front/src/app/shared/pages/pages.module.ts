import { NgModule } from '@angular/core';
import { HomeModule } from 'src/app/components/home/home.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { MedicosModule } from 'src/app/components/medicos/medicos.module';






@NgModule({
  exports:[
    HomeModule,
    LoginModule,
    MedicosModule
  ]
})
export class PagesModule { }

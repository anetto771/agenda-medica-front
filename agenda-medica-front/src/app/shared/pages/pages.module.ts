import { NgModule } from '@angular/core';
import { HomeModule } from 'src/app/components/home/home.module';

import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';




@NgModule({
  exports:[
    HomeModule,
    NavBarModule
    
  ]
})
export class PagesModule { }

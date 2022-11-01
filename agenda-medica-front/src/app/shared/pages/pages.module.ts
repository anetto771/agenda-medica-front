import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/components/home/home.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { DashboardModule } from 'src/app/components/dashboard/dashboard.module';



@NgModule({
    imports: [
    HomeModule,
    DashboardModule
  ],
  exports:[
    HomeComponent,
    DashboardComponent
  ]
})
export class PagesModule { }

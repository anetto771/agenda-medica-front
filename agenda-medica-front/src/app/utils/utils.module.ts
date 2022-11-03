import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExitComponent } from './exit/exit.component';



@NgModule({
  declarations: [
    ExitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ExitComponent
  ]
})
export class UtilsModule { }

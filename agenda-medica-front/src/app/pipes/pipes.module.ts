import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { EncerramentoPipe } from './encerramento.pipe';



@NgModule({
  declarations: [
    StatusPipe,
    EncerramentoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe,
    EncerramentoPipe
  ]
})
export class PipesModule { }

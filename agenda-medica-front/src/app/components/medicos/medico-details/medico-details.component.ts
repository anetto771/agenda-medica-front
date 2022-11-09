import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medico } from 'src/app/models/medico';

@Component({
  selector: 'app-medico-details',
  templateUrl: './medico-details.component.html',
  styleUrls: ['./medico-details.component.scss']
})
export class MedicoDetailsComponent implements OnInit {

  public medico: Medico
  
  constructor(@Inject(MAT_DIALOG_DATA) medico: Medico) { 
    this.medico = medico
    console.log(medico.dataCriacao);
  }

  ngOnInit(): void {
  }

}

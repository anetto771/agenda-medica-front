import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente-details',
  templateUrl: './paciente-details.component.html',
  styleUrls: ['./paciente-details.component.scss']
})
export class PacienteDetailsComponent implements OnInit {

  public paciente: Paciente
  
  constructor(@Inject(MAT_DIALOG_DATA) paciente: Paciente) { 
    this.paciente = paciente
    console.log(paciente.dataCriacao);
  }

  ngOnInit(): void {
  }

}

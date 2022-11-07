import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Agendamento } from 'src/app/models/agendamento';

@Component({
  selector: 'app-agendamento-details',
  templateUrl: './agendamento-details.component.html',
  styleUrls: ['./agendamento-details.component.scss']
})
export class AgendamentoDetailsComponent implements OnInit {

  public agendamento!: Agendamento;
  
  constructor(@Inject(MAT_DIALOG_DATA) agendamento: Agendamento) { 
    this.agendamento = agendamento;
    console.log(agendamento.dataFechamento);
  }

  ngOnInit(): void {
  }

}

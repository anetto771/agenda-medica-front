import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatRadioButton } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})


export class AgendamentosComponent implements OnInit {


  public agendamentoList: Agendamento[] = [];

  displayedColumns: string[] = ['id', 'dataAbertura', 'status', 'titulo',
    'observacoes', 'medico', 'paciente', 'nomeMedico', 'nomePaciente', 'update', 'details'];
    
  dataSource = new MatTableDataSource<Agendamento>(this.agendamentoList);

@ViewChild(MatPaginator)
paginator!: MatPaginator;

private service: AgendamentoService;

constructor(service: AgendamentoService) {
this.service = service;
}
ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
}
  initializeTable(): void {
    this.service.findAll().subscribe(agendamentos =>{
      this.agendamentoList = agendamentos;
      this.dataSource = new MatTableDataSource<Agendamento>(this.agendamentoList);
      this.dataSource.paginator = this.paginator;
    }) 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  filterByStatus(status: number): void {
    let filterList: Agendamento[] = [];
    this.agendamentoList.forEach(agendamentos => {
      if(agendamentos.status === status) {
        filterList.push(agendamentos);
      }
    });
    this.dataSource = new MatTableDataSource<Agendamento>(filterList);
    this.dataSource.paginator = this.paginator;
  }
  clearFilter(input: HTMLInputElement, check0: MatRadioButton, check1: MatRadioButton, check2: MatRadioButton): void {
    input.value = "";
    check0.checked = false;
    check1.checked = false;
    check2.checked = false;
    this.dataSource = new MatTableDataSource<Agendamento>(this.agendamentoList);
    this.dataSource.paginator = this.paginator;
  }
}


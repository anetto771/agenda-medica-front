import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from 'src/app/models/medico';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit, AfterViewInit {

  ELEMENT_DATA: Medico[] = [
    {
      id: 1,
      nome:"Aecio Netto",
      cpf:"15105299779",
      email: "aecio@gmail.com",
      perfis:["ADMIN","PACIENTE"],
      dataCriacao: "02/11/2022"
    },
    {
      id: 2,
      nome:"Eychila Eleuterio",
      cpf:"16766656760",
      email: "eychila@gmail.com",
      especialidade: "Clinico Geral",
      perfis:["MEDICO","PACIENTE"],
      dataCriacao: "02/11/2022"
    }
  ]

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf','especialidade','dataCriacao','update','delete'];
  dataSource = new MatTableDataSource<Medico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

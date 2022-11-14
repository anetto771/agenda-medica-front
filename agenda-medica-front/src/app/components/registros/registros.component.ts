import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';




@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})


export class RegistrosComponent implements OnInit {


  public registroList: Registro[] = [];
  

  displayedColumns: string[] = ['nomePaciente', 'nomeMedico','horaAbertura'];
    
  dataSource = new MatTableDataSource<Registro>(this.registroList);

@ViewChild(MatPaginator)
paginator!: MatPaginator;

private service: RegistroService;
private dialog: MatDialog;

constructor( service: RegistroService,dialog: MatDialog) {
this.service = service;
this.dialog = dialog;
}
ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
}
  initializeTable(): void {
    this.service.findAll().subscribe(registros =>{
      this.registroList = registros;
      this.dataSource = new MatTableDataSource<Registro>(this.registroList);
      this.dataSource.paginator = this.paginator;
    })
}
}

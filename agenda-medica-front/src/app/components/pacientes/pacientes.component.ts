import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit, AfterViewInit {

  pacienteList: Paciente[] = [];

  displayedColumns: string[] = ['id', 'nome', 'email', 'rg', 'cpf','telefone','endereco', 'dataCriacao', 'update', 'delete'];
  dataSource = new MatTableDataSource<Paciente>(this.pacienteList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private service: PacienteService;
  private toast: ToastrService;

  constructor(service: PacienteService, toast: ToastrService) { 
    this.service = service;
    this.toast = toast;
  }

  ngOnInit(): void {
    this.initializeTable();
  }

  filterName = (paciente: Paciente, value: string) => {
    let flag: boolean = paciente.nome.toLocaleLowerCase().indexOf(value) != -1;
    if (flag) {
      return true;
    }
    else {
      return false
    }
  };
  filterCpf = (paciente: Paciente, value: string) => {
    let flag: boolean = paciente.cpf.toLocaleLowerCase().indexOf(value) != -1;
    if (flag) {
      return true;
    }
    else {
      return false
    }
  };

  applyFilterName(event: Event) {
    this.dataSource.filterPredicate = this.filterName;
    const filterValue = (<HTMLInputElement>event.target).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterCpf(event: Event) {
    this.dataSource.filterPredicate = this.filterCpf;
    const filterValue = (<HTMLInputElement>event.target).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  initializeTable(): void { 
    this.service.findAll().subscribe(pacientes => {
      this.pacienteList = pacientes;
      this.dataSource = new MatTableDataSource<Paciente>(this.pacienteList);
      this.dataSource.paginator = this.paginator;
        })
  }
  delete(id: number): void {
    this.service.remove(id).subscribe({
      next: response => {
        this.toast.success("Paciente deletado com sucesso!", "Sucesso");
        this.initializeTable();
      }
    })
  }

}


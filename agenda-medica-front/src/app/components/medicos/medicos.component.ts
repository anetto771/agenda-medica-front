import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit, AfterViewInit {

  medicoList: Medico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf','telefone','especialidade', 'dataCriacao', 'update', 'delete'];
  dataSource = new MatTableDataSource<Medico>(this.medicoList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private service: MedicoService;
  private toast: ToastrService;

  constructor(service: MedicoService, toast: ToastrService) { 
    this.service = service;
    this.toast = toast;
  }

  ngOnInit(): void {
    this.initializeTable();
  }

  filterName = (medico: Medico, value: string) => {
    let flag: boolean = medico.nome.toLocaleLowerCase().indexOf(value) != -1;
    if (flag) {
      return true;
    }
    else {
      return false
    }
  };
  filterCpf = (medico: Medico, value: string) => {
    let flag: boolean = medico.cpf.toLocaleLowerCase().indexOf(value) != -1;
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
    this.service.findAll().subscribe(medicos => {
      this.medicoList = medicos;
      this.dataSource = new MatTableDataSource<Medico>(this.medicoList);
      this.dataSource.paginator = this.paginator;
        })
  }
  delete(id: number): void {
    this.service.remove(id).subscribe({
      next: response => {
        this.toast.success("Médico deletado com sucesso!", "Sucesso");
        this.initializeTable();
      }
    })
  }

}


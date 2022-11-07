import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, AfterViewInit {

  usuarioList: Usuario[] = [];

  displayedColumns: string[] = ['id', 'nome','cpf', 'email','dataCriacao', 'update', 'delete'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarioList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private service: UsuarioService;
  private toast: ToastrService;

  constructor(service: UsuarioService, toast: ToastrService) { 
    this.service = service;
    this.toast = toast;
  }

  ngOnInit(): void {
    this.initializeTable();
  }

  filterName = (usuario: Usuario, value: string) => {
    let flag: boolean = usuario.nome.toLocaleLowerCase().indexOf(value) != -1;
    if (flag) {
      return true;
    }
    else {
      return false
    }
  };
  filterCpf = (usuario: Usuario, value: string) => {
    let flag: boolean = usuario.cpf.toLocaleLowerCase().indexOf(value) != -1;
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
    this.service.findAll().subscribe(usuarios => {
      this.usuarioList = usuarios;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarioList);
      this.dataSource.paginator = this.paginator;
        })
  }
  delete(id: number): void {
    this.service.remove(id).subscribe({
      next: response => {
        this.toast.success("Usuário deletado com sucesso!", "Sucesso");
        this.initializeTable();
      }
    })
  }

}


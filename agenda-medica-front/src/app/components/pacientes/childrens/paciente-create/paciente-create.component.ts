import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.scss']
})
export class PacienteCreateComponent implements OnInit {

  public paciente: Paciente = {
  nome: "",
  cpf: "",
  rg: "",
  email: "",
  telefone: "",
  endereco:"",
  perfis: [],
  }

  private perfis: number[] = [];
  private toast: ToastrService;
  private service: PacienteService;
  private router: Router;

  constructor(service: PacienteService,toast: ToastrService, router: Router) { 
    this.service = service;
    this.toast = toast;
    this.router = router;
    
  }

  ngOnInit(): void {
  }

  addPerfil(perfil: number): void {
    for(let i = 0; i < this.perfis.length; i++) {
      if(this.perfis[i] === perfil) {
        this.perfis.splice(i, 1);
        this.paciente.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.paciente.perfis = this.perfis;
  }

  create(form: NgForm){
    if(form.valid) {
      this.service.insert(this.paciente).subscribe({
        next: response => {
          this.toast.success("Médico cadastrado com sucesso", "Sucesso");
          this.router.navigate(["/pacientes"]);
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if(errors != undefined) {
            errors.forEach((error: any ) => {
              this.toast.error(error.message,"Erro");
            });
          }
          else {
            this.toast.error(errorResponse.error.message,"Erro")
          }
        }
      })
    }
    else {
      this.toast.error("Dados inválidos","Erro");
    }
  }
}

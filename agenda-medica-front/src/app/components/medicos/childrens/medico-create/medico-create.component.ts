import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.scss']
})
export class MedicoCreateComponent implements OnInit {

  public medico: Medico = {
  nome: "",
  cpf: "",
  email: "",
  telefone: "",
  especialidade:"",
  perfis: [],
  }

  private perfis: number[] = [];
  private toast: ToastrService;
  private service: MedicoService;
  private router: Router;

  constructor(service: MedicoService,toast: ToastrService, router: Router) { 
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
        this.medico.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.medico.perfis = this.perfis;
  }

  create(form: NgForm){
    if(form.valid) {
      this.service.insert(this.medico).subscribe({
        next: response => {
          this.toast.success("Médico cadastrado com sucesso", "Sucesso");
          this.router.navigate(["/medicos"]);
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

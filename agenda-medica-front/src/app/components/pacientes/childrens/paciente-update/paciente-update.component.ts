import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.scss']
})
export class PacienteUpdateComponent implements OnInit {

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
  public perfisChecked: boolean[] = [false, false, false];
  private toast: ToastrService;
  private service: PacienteService;
  private router: Router;
  private route: ActivatedRoute

  constructor(service: PacienteService,toast: ToastrService, router: Router, route: ActivatedRoute) { 
    this.service = service;
    this.toast = toast;
    this.router = router;
    this.route = route;
    
  }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(paciente =>{
        this.paciente = paciente;
        this.initializaPerfis(<string[]>this.paciente.perfis);
      })
    }
  }

  initializaPerfis(perfis: string[]): void {
    for(let perfil of perfis) {
      switch(perfil) {
        case "ADMIN":
          this.addPerfil(0);
          break;
        case "PACIENTE":
          this.addPerfil(1);
          break;
        case "MEDICO":
          this.addPerfil(2);
          break;
      }
    }
  }

  addPerfil(perfil: number): void {
    for(let i = 0; i < this.perfis.length; i++) {
      if(this.perfis[i] === perfil) {
        this.perfis.splice(i, 1);
        this.perfisChecked[perfil] = false;
        this.paciente.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.perfisChecked[perfil] = true;
    this.paciente.perfis = this.perfis;
  }

  update(form: NgForm){
    if(form.valid) {
      this.service.update(this.paciente).subscribe({
        next: response => {
          this.toast.success("Médico editado com sucesso", "Sucesso");
          this.router.navigate(["/pacientes"]);
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if(errors != undefined) {
            errors.forEach((error: any) => {
              this.toast.error(error.message, "Erro");
            })
          }
          else {
            this.toast.error(errorResponse.error.message, "Erro");
          }
        }
      });
    }
    else {
      this.toast.error("Dados inválidos","Erro");
    }
  }
}

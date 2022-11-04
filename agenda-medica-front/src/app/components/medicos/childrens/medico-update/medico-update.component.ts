import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.scss']
})
export class MedicoUpdateComponent implements OnInit {

  public medico: Medico = {
  nome: "",
  cpf: "",
  email: "",
  telefone: "",
  especialidade:"",
  perfis: [],
  }

  private perfis: number[] = [];
  public perfisChecked: boolean[] = [false, false, false];
  private toast: ToastrService;
  private service: MedicoService;
  private router: Router;
  private route: ActivatedRoute

  constructor(service: MedicoService,toast: ToastrService, router: Router, route: ActivatedRoute) { 
    this.service = service;
    this.toast = toast;
    this.router = router;
    this.route = route;
    
  }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(medico =>{
        this.medico = medico;
        this.initializaPerfis(<string[]>this.medico.perfis);
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
        this.medico.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.perfisChecked[perfil] = true;
    this.medico.perfis = this.perfis;
  }

  update(form: NgForm){
    if(form.valid) {
      this.service.update(this.medico).subscribe({
        next: response => {
          this.toast.success("Médico editado com sucesso", "Sucesso");
          this.router.navigate(["/medicos"]);
        }
      })
    }
    else {
      this.toast.error("Dados inválidos","Erro");
    }
  }
}

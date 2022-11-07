import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  public usuario: Usuario = {
  nome: "",
  cpf: "",  
  email: "",
  senha: '',
  perfis: [],
  }

  private perfis: number[] = [];
  private toast: ToastrService;
  private service: UsuarioService;
  private router: Router;

  constructor(service: UsuarioService,toast: ToastrService, router: Router) { 
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
        this.usuario.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.usuario.perfis = this.perfis;
  }

  create(form: NgForm){
    if(form.valid) {
      this.service.insert(this.usuario).subscribe({
        next: response => {
          this.toast.success("Usuário cadastrado com sucesso", "Sucesso");
          this.router.navigate(["/usuarios"]);
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

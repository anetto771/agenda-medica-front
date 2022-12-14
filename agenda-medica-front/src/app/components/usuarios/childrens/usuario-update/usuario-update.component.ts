
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.scss']
})
export class UsuarioUpdateComponent implements OnInit {

  public usuario: Usuario = {
  nome: "",
  cpf: "", 
  email: "",
  senha: "", 
  perfis: [],
  }

  private perfis: number[] = [];

  private toast: ToastrService;
  private service: UsuarioService;
  private router: Router;
  private route: ActivatedRoute

  constructor(service: UsuarioService,toast: ToastrService, router: Router, route: ActivatedRoute) { 
    this.service = service;
    this.toast = toast;
    this.router = router;
    this.route = route;
    
  }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(usuario =>{
        this.usuario = usuario;
      });
    }
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

  update(form: NgForm){
    if(form.valid) {
      this.service.update(this.usuario).subscribe({
        next: response => {
          this.toast.success("Usuário editado com sucesso", "Sucesso");
          this.router.navigate(["/usuarios"]);
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if(errors != undefined) {
            errors.forEach((error: any) => {
              this.toast.error(error.message, "Erro");
            });
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

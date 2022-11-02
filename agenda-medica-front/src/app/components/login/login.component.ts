import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  private toastr: ToastrService;

  constructor(formBuilder: FormBuilder, toastr: ToastrService) { 
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required,Validators.email]],
      senha: ["", [Validators.required,Validators.minLength(4)]]
    });
    this.toastr = toastr;
  }

  ngOnInit(): void {
  }

  public logar(): void {
    if(this.formLogin.valid) {
      let credenciais: Credenciais = this.formLogin.value;
    }else {
      this.toastr.error("E-mail e/ou senha inválido,", "Login");
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agendamento } from 'src/app/models/agendamento';
import { Medico } from 'src/app/models/medico';
import { Paciente } from 'src/app/models/paciente';
import { Usuario } from 'src/app/models/usuario';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { UsuarioService } from 'src/app/services/usuario.service';

type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-agendamentos-create',
  templateUrl: './agendamentos-create.component.html',
  styleUrls: ['./agendamentos-create.component.scss']
})
export class AgendamentosCreateComponent implements OnInit {

  public statusList: DataSection[] = [
    { title: "Aberto", value: 0 },
    { title: "Em andamento", value: 1, },
    { title: "Encerrado", value: 2 }
  ]


  public pacienteList: Paciente[] = [];
  public medicoList: Medico[] = [];

  public formAgendamento: FormGroup;


  private servicePaciente: PacienteService;
  private serviceMedico: MedicoService;
  private toast: ToastrService;
  private service: AgendamentoService;
  private router: Router;


  constructor(service: AgendamentoService, servicePaciente: PacienteService,
    serviceMedico: MedicoService, formBuilder: FormBuilder, toast: ToastrService, router: Router, ) {

    this.service = service;
    
    this.servicePaciente = servicePaciente;
    this.serviceMedico = serviceMedico;
    this.toast = toast;
    this.router = router;
    this.formAgendamento = formBuilder.group({
      titulo: ["", [Validators.required]],
      horaAbertura:["",[Validators.required]],
      horaFechamento:["",[Validators.required]],
      status: ["", [Validators.required]],
      usuario: ["", [Validators.required]],
      paciente: ["", [Validators.required]],
      medico: ["", [Validators.required]],
      observacoes: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.initializePaciente();
    this.initializeMedico();
  }
  initializePaciente(): void {
    this.servicePaciente.findAll().subscribe(paciente => {
      this.pacienteList = paciente;
    });
  }
  initializeMedico(): void {
    this.serviceMedico.findAll().subscribe(medico => {
      this.medicoList = medico;
    });
  }
  created(): void {
    if (this.formAgendamento.valid) {
      let agendamento: Agendamento = this.formAgendamento.value;
      this.service.insert(agendamento).subscribe({
        next: () => {
          this.toast.success("Agendamento adicionado com sucesso.", "Sucesso");
          
          this.router.navigate(["/agendamentos"]);
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
    } else {
      this.toast.error("Dados inválidos.", "Erro");
    }
    
  }

};
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agendamento } from 'src/app/models/agendamento';
import { Medico } from 'src/app/models/medico';
import { Paciente } from 'src/app/models/paciente';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';


type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-agendamentos-update',
  templateUrl: './agendamentos-update.component.html',
  styleUrls: ['./agendamentos-update.component.scss']
})
export class AgendamentosUpdateComponent implements OnInit {

  public statusList: DataSection[] = [
    { title: "Aberto", value: 0 },
    { title: "Em andamento", value: 1, },
    { title: "Encerrado", value: 2 }
  ];

  public agendamento: Agendamento = {
    status: NaN,
    titulo: '',
    horaAbertura: new Date(),
    horaFechamento: new Date(),
    observacoes: '',
    medico: NaN,
    paciente: NaN,
    nomeMedico: '',
    nomePaciente: ''
  }

  public pacienteList: Paciente[] = [];
  public medicoList: Medico[] = [];



  
  private servicePaciente: PacienteService;
  private serviceMedico: MedicoService;
  private toast: ToastrService;
  private service: AgendamentoService;
  private router: Router;
  private route: ActivatedRoute;

  constructor(service: AgendamentoService, servicePaciente: PacienteService,
    serviceMedico: MedicoService, toast: ToastrService, router: Router, route: ActivatedRoute) {

    this.service = service;

    this.servicePaciente = servicePaciente;
    this.serviceMedico = serviceMedico;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
  
    this.initializeCliente();
    this.initializeMedico();
    this.initializeFields();
  }
  initializeCliente(): void {
    this.servicePaciente.findAll().subscribe(paciente => {
      this.pacienteList = paciente;
    });
  }
  initializeMedico(): void {
    this.serviceMedico.findAll().subscribe(medico => {
      this.medicoList = medico;
    });
  }

  initializeFields(): void {
    let id: string | null = (this.route.snapshot.paramMap.get("id"));
    if(id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(agendamento => {
        this.agendamento = agendamento;
      });
    }
  }

  update(form: NgForm): void {
    if (form.valid) {
      this.service.update(this.agendamento).subscribe({
        next: () => {
          this.toast.success("Agendamento editado com sucesso.", "Sucesso");
          this.router.navigate(["/agendamentos"]);
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if (errors != undefined) {
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
}

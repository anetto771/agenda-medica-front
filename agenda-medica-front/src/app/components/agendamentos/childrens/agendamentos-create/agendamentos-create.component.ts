import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medico } from 'src/app/models/medico';
import { Paciente } from 'src/app/models/paciente';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';

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


  constructor(servicePaciente: PacienteService, serviceMedico: MedicoService, formBuilder: FormBuilder) {
    this.servicePaciente = servicePaciente;
    this.serviceMedico = serviceMedico;
    this.formAgendamento = formBuilder.group({
      titulo: [""],
      status: [""],
      paciente: [""],
      medico: [""],
      observacoes: [""]
    });
  }

  ngOnInit(): void {
    this.initializeCliente();
    this.initializeMedico();
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
  created(): void{
    
  }
}

export interface Agendamento {
    id?: number;
    horaAbertura: Date;
    horaFechamento:  Date;
    status: number;
    titulo: string;
    observacoes: string;
    medico: number;
    paciente: number;
    nomeMedico: string;
    nomePaciente: string;
}

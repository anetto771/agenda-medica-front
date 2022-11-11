export interface Agendamento {
    id?: number;
    //dataAbertura?: string;
    //dataFechamento?: string;
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

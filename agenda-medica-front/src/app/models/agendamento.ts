export interface Agendamento {
    id?: number,
    dataAbertura?: string;
    dataFechamento?: string;
    status: number;
    titulo: string;
    observacoes: string;
    medico: number;
    paciente: number;
    nomeMedico: string;
    nomeCliente: string;
}

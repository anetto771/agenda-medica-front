export interface Paciente {
    id?: number;
    nome: string;
    rg: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    senha?: string;
    perfis: string[] | number[];
    dataCriacao?: string | Date;
}

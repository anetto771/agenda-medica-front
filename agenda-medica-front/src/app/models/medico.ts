export interface Medico {
    id?: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    especialidade?: string;
    senha?: string;
    perfis: string[] | number[];
    dataCriacao?: string | Date;
}

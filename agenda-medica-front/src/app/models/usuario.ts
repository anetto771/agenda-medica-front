export interface Usuario {
    id?: number;
    cpf: string;
    nome: string;
    email: string;
    senha?: string;
    perfis: string[] | number[];
    dataCriacao?: string | Date;
}

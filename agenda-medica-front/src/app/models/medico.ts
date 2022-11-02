export interface Medico {
    id?: number;
    nome: string;
    cpf: string;
    email: string    
    especialidade?: string;
    senha?: string;
    perfis: string[];
    dataCriacao: string | Date;

}

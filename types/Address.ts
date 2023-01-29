export type Address = {
    id: number;
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    complement?: string;
}
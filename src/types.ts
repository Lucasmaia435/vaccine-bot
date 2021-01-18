export interface stateData {
    population: number;
    signup_population: number;
    vaccinated_population: number

}

export interface dataCity {
    cod_ibge: number
    nome: string
    populacao__populacao: number
    total: number,
    total_vacinados: number
}

export interface responseFetch {
    population: number
    signup_population: number
    vaccinated_population: number
}

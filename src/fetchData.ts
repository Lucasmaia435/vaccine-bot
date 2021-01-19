import axios from "axios";
import { responseFetch, stateData } from "./types";


const formatData = (data: string): stateData => {
    const search = data.split('>')
    const response: stateData = {
        population: 0,
        signup_population: 0,
        vaccinated_population: 0
    }
    search.forEach((arr: string, index: number) => {
        if (arr.includes('POPULAÇÃO DO RN')) {
            response.population = parseInt(search[index + 2].replace('</h1', '').replace(/\./g, ''))
        }
        if (arr.includes('PESSOAS CADASTRADAS')) {
            response.signup_population = parseInt(search[index + 2].replace('</h1', '').replace(/\./g, ''))
        }
        if (arr.includes('PESSOAS VACINADAS')) {
            response.vaccinated_population = parseInt(search[index + 2].replace('</h1', '').replace(/\./g, ''))
        }
    })
    return response
}

const fetchData = async (): Promise<responseFetch> => {
    try {
        const { data } = await axios.get('https://maisvacina.saude.rn.gov.br/cidadao/')
        const reducedData = formatData(data);

        return reducedData;
    } catch (error) {
        return await fetchData()

    }



}


export default fetchData;



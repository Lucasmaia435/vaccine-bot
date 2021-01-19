import axios from "axios";
import { dataCity, responseFetch, stateData } from "./types";


const reduceData = (data: dataCity[]): stateData => {
    const stateInfo = data.reduce<stateData>((value, crr) => {
        const newValue = {
            population: 0,
            signup_population: 0,
            vaccinated_population: 0
        }

        newValue.population = value.population + crr.populacao__populacao;
        newValue.signup_population = value.signup_population + crr.total;
        newValue.vaccinated_population = value.vaccinated_population + crr.total_vacinados;

        return newValue
    }, {
        population: 0,
        signup_population: 0,
        vaccinated_population: 0

    })

    return stateInfo
}

const fetchData = async (): Promise<responseFetch> => {
    try {
        const { data } = await axios.get('https://maisvacina.saude.rn.gov.br/cidadao/cidadao/cadastrados/json')
        const reducedData = reduceData(data.data);

        return reducedData;
    } catch (error) {
        return await fetchData()

    }



}


export default fetchData;



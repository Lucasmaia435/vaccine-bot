import axios from "axios";
import { formatData } from '../utils/format-data'
import { stateData } from '../types/types'
import { reduceData } from "../utils/reduce-data";

export const fetchData = async (): Promise<stateData> => {
  try {
    const { data } = await axios.get('https://maisvacina.saude.rn.gov.br/transparencia/mapa-cidadaos.json')
    // const formatedData = formatData(data);
    // const formatedData = reduceData(data.data)
    const response: stateData = {
      population: data.total_populacao_rn,
      signup_population: data.total_cidadaos_cadastrados,
      vaccinated_population: data.total_cidadaos_vacinados
    }
    console.log(response)

    return response;
  } catch (_) {
    return await fetchData()

  }
}

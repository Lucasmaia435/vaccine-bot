import axios from "axios";
import { formatData } from '../utils/format-data'
import { stateData } from '../types/types'
import { reduceData } from "../utils/reduce-data";

export const fetchData = async (): Promise<any> => {
  try {
    const { data } = await axios.get('https://maisvacina.saude.rn.gov.br/transparencia/mapa-cidadaos.json')
    // const formatedData = formatData(data);
    // const formatedData = reduceData(data.data)

    return data;
  } catch (_) {
    return await fetchData()

  }
}

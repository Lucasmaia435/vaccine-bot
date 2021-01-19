import axios from "axios";
import { formatData } from '../utils/format-data'
import { stateData } from '../types/types'

export const fetchData = async (): Promise<stateData> => {
  try {
    const { data } = await axios.get<string>('https://maisvacina.saude.rn.gov.br/cidadao/')
    const formatedData = formatData(data);

    return formatedData;
  } catch (_) {
    return await fetchData()

  }
}

import { fetchData } from '../api/fetch-data-web'
import { stateData } from '../types/types';
import { updateDataTwitterUseCase } from '../use-cases/update-data-twitter'


export const updateVaccineDataController = async () => {
  const data = await fetchData();


  const response: stateData = {
    population: data.total_populacao_rn,
    signup_population: data.total_cidadaos_cadastrados,
    vaccinated_population: data.total_cidadaos_vacinados
  }
  updateDataTwitterUseCase(response)
  console.log('Informações atualizadas!');
}


import { fetchData } from '../api/fetch-data-web'
import { updateDataTwitterUseCase } from '../use-cases/update-data-twitter'


export const updateVaccineDataController = async () => {
  const data = await fetchData()

  updateDataTwitterUseCase(data)
  console.log('Informações atualizadas!')
}


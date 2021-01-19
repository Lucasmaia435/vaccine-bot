import { stateData } from "../types/types"

export const formatData = (data: string): stateData => {
  const search = data.split('>')
  const response = {
    population: 0,
    signup_population: 0,
    vaccinated_population: 0
  }

  search.forEach((arr: string, index: number) => {
    if (arr.includes('POPULAÇÃO DO RN')) {
      console.log(search[index + 2])
      response.population = parseInt(search[index + 2].replace('</h1', '').replace(/\./g, ''))
    }
    if (arr.includes('PESSOAS CADASTRADAS')) {
      response.signup_population = parseInt(search[index + 2].replace('</h1', '').replace(/\./g, ''))
    }
    if (arr.includes('PESSOAS VACINADAS')) {
      response.vaccinated_population = parseInt(search[index + 2].replace('</h1', '').replace(/\./g, ''))
    }
  })
  console.log(response)
  return response
}



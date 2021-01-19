import { dataCity, stateData } from "../types/types";

export const reduceData = (data: dataCity[]): stateData => {
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
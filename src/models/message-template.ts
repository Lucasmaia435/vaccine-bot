import { dataCity, stateData } from '../types/types'
import formatNumber from '../utils/formatNumber';

export const createMessage = ({ population, signup_population, vaccinated_population }: stateData) => {
  const msg =
    `Programa de vacinação contra o COVID - RN\n\n\n` +
    `😷 Cadastrados :  ${formatNumber(signup_population)}\n` +
    `☑️ Vacinados :  ${formatNumber(vaccinated_population)}\n\n` +

    `🥳 Cadastrados em relação a população do RN % : ${(signup_population * 100 / population).toFixed(3)}% \n` +
    `💉 Vacinados em relação a população do RN % : ${(vaccinated_population * 100 / population).toFixed(4)}%\n` +
    `💉 Vacinados em relação a população cadastrada no +Vacina % : ${(vaccinated_population * 100 / signup_population).toFixed(3)}%`
  return msg;
};


export const createIndividualMessage = ({ nome, populacao__populacao, total, total_vacinados }: dataCity, username: string) => {
  const msg =
    `@${username}\n` +
    `${nome}/RN\n\n\n` +
    `😷 Cadastrados :  ${formatNumber(total)}\n` +
    `☑️ Vacinados :  ${formatNumber(total_vacinados)}\n\n` +

    `Vacinados em relação a população da cidade % : ${(total_vacinados * 100 / populacao__populacao).toFixed(4)}%\n` +
    `Vacinados / população cadastrada no +Vacina % : ${(total_vacinados * 100 / total).toFixed(3)}%`

  return msg
}
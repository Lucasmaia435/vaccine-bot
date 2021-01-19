import { sign } from 'crypto';
import { stateData } from '../types/types'
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
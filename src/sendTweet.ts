import Twit from "twit";
import fetchData from "./fetchData";
import { responseFetch } from "./types";
import formatNumber from './utils/formatNumber';

const lastState: responseFetch = {
    population: 0,
    signup_population: 0,
    vaccinated_population: 0,
}


const sendTweet = (bot: Twit) => {
    fetchData().then((data) => {
        console.log(data);
        if (data.population !== lastState.population || data.signup_population !== lastState.signup_population || data.vaccinated_population !== lastState.vaccinated_population) {
            let msg =
                `Programa de vacinação contra o COVID - Rio Grande do Norte\n\n\n` +
                `😷 Cadastrados :  ${formatNumber(data.signup_population)}\n` +
                `☑️ Vacinados :  ${formatNumber(data.vaccinated_population)}\n` +
                `👥 População geral do RN : ${formatNumber(data.population)}\n` +
                `🥳 Cadastrados em relação a população do RN % : ${(data.signup_population * 100 / data.population).toFixed(2)}% \n` +
                `💉 Vacinados em relação a população do RN % : ${(data.vaccinated_population * 100 / data.population).toFixed(2)}%` +
                `\n\n\n#Covid19 #Brasil #RN`;

            bot.post('statuses/update', { status: msg }, (err: Error) => {
                if (!err) {
                    console.log("Houve alteração nos dados");
                }
            });
            Object.assign(lastState, data);
        }
    });
}

export default sendTweet;




import axios from 'axios';
import Twit from 'twit';
import 'dotenv/config'

const bot = new Twit({
  consumer_key: process.env.consumer_key || '',
  consumer_secret: process.env.consumer_secret || '',
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});

interface stateData {
  population: number;
  signup_population: number;
  vaccinated_population: number

}

interface dataCity {
  cod_ibge: number
  nome: string
  populacao__populacao: number
  total: number,
  total_vacinados: number
}

interface responseFetch {
  population: number
  signup_population: number
  vaccinated_population: number
}


const lastState: responseFetch = {
  population: 0,
  signup_population: 0,
  vaccinated_population: 0,
}


const reduceData = (data: dataCity[]): stateData => {
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

const fetchData = async (): Promise<responseFetch> => {
  const { data } = await axios.get('https://maisvacina.saude.rn.gov.br/cidadao/cidadao/cadastrados/json')

  const reducedData = reduceData(data.data);

  return reducedData;
}


fetchData().then((data) => {
  console.log(data);
  if (data.population !== lastState.population || data.signup_population !== lastState.signup_population || data.vaccinated_population !== lastState.vaccinated_population) {
    let msg = `
          Programa de vacinação contra o COVID - Rio Grande do Norte\n\n\n😷 Cadastrados :  ${data.signup_population}\n☑️ Vacinados :  ${data.vaccinated_population}\n👥 População geral do RN : ${data.population}\n💉 Vacinados em relação a população do RN % : ${data.vaccinated_population * 100 / data.population}%\n\n\n#Covid19 #Brasil #RN
          
          `;

    bot.post('statuses/update', { status: msg }, (err: Error) => {
      if (!err) {
        console.log("Houve alteração nos dados");
      }
    });
    Object.assign(lastState, data);
  }




});


setInterval(() => {
  fetchData().then((data) => {
    console.log(data);
    if (data.population !== lastState.population || data.signup_population !== lastState.signup_population || data.vaccinated_population !== lastState.vaccinated_population) {
      let msg = `
          Programa de vacinação contra o COVID - Rio Grande do Norte
          
          😷 Cadastrados :  ${data.signup_population}
          ☑️ Vacinados :  ${data.vaccinated_population}
          👥 População geral do RN : ${data.population}
          🥳 Cadastrados em relação a população do RN % : ${data.signup_population * 100 / data.population}%
          💉 Vacinados em relação a população do RN % : ${data.vaccinated_population * 100 / data.population}%
          
          #Covid19 #Brasil #RN
          
          `;

      bot.post('statuses/update', { status: msg }, (err: Error) => {
        if (!err) {
          console.log("Houve alteração nos dados");
        }
      });
      Object.assign(lastState, data);
    }




  });
}, 600000); // 10 min


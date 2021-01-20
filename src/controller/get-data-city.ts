import Twit from 'twit'
import { fetchData } from '../api/fetch-data-web'
import { createIndividualMessage } from '../models/message-template'
import { dataCity as cityType } from '../types/types'
import { formatCityName } from '../utils/format-city-name'


export const getDataCityController = async (city: string, twitterBot: Twit, tweet: any) => {
  const data = await fetchData()
  const selectedCity = data.contadores_por_municipio.filter((dataCity: cityType) => {
    return formatCityName(dataCity.nome) === formatCityName(city);
  })



  if (selectedCity[0]) {
    const msg = createIndividualMessage(selectedCity[0], tweet.user.screen_name);
    return twitterBot.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: msg }, err => {
      if (err) console.log(err);
    });
  }
  return twitterBot.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: '@' + tweet.user.screen_name + ' Cidade não encontrada!' }, err => {
    if (err) console.log(err);
  });


}


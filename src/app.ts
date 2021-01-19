import 'dotenv/config';
import EventEmitter from 'events';
import Twit, { } from 'twit';
import { getDataCityController } from './controller/get-data-city';
import { updateVaccineDataController } from './controller/update-vaccine-data';
export const eventApp = new EventEmitter()

export const twitterBot = new Twit({
  consumer_key: process.env.consumer_key || '',
  consumer_secret: process.env.consumer_secret || '',
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});

const stream = twitterBot.stream('statuses/filter', { track: '@covid19norn -c' });

stream.on('tweet', (tweet) => {
  if (tweet.user.screen_name !== 'covid19norn') {
    const text = tweet.text.replace('@covid19norn -c', '');
    getDataCityController(text, twitterBot, tweet);
  }
});

eventApp.on('update', updateVaccineDataController)







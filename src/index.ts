import Twit from 'twit';
import 'dotenv/config';

import sendTweet from './sendTweet';
import { setInterval } from 'timers';

const bot = new Twit({
  consumer_key: process.env.consumer_key || '',
  consumer_secret: process.env.consumer_secret || '',
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});



sendTweet(bot);

setInterval(() => sendTweet(bot), 1800000); // 30 min


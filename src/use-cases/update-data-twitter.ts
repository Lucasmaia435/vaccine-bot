import { stateData } from "../types/types";
import { createMessage } from '../models/message-template';
import Twit from "twit";

export const updateDataTwitterUseCase = (data: stateData) => {
  const twitterBot = new Twit({
    consumer_key: process.env.consumer_key || '',
    consumer_secret: process.env.consumer_secret || '',
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
  });


  const msg = createMessage(data)
  twitterBot.post('statuses/update', { status: msg }, (err: Error) => {
    if (err) {
      console.log(err);
    }
  });
};
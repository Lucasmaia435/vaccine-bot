import { stateData } from "../types/types";
import { createMessage } from '../models/message-template';
import Twit from "twit";
import { twitterBot } from "../app";

export const updateDataTwitterUseCase = (data: stateData) => {
  const msg = createMessage(data)
  twitterBot.post('statuses/update', { status: msg }, (err: Error) => {
    if (err) {
      console.log(err);
    }
  });
};
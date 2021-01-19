import 'dotenv/config';
import EventEmitter from 'events';
import { updateVaccineDataController } from './controller/update-vaccine-data';
export const eventApp = new EventEmitter()


eventApp.on('update', updateVaccineDataController)







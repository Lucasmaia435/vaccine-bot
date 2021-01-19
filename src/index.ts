import { eventApp } from './app'


const emmitter = () => {
  eventApp.emit('update')
}


setInterval(emmitter, 1800000 * 2) // 60 minutos
import { eventApp } from './app'


const emmitter = () => {
  eventApp.emit('update')
}

setInterval(emmitter, 1800000) // 30 minutos
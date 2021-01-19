import { eventApp } from './app'


const emmitter = () => {
  eventApp.emit('update')
}

emmitter()

setInterval(emmitter, 1800000) // 30 minutos
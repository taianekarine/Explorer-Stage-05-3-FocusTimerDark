import {inputForest, inputRain, inputCoffe, inputFireplace } from './elements.js'
export const Sounds = () => {
  
  const soundForestStart = () => {
    const soundForest = new Audio ('assets/sounds/Floresta.wav')
    soundForest.play
    soundForest.volume = inputForest.value / 100
    soundForest.loop = true
  }
  
  const soundRainStart = () => {
    const soundRain = new Audio ('assets/sounds/Chuva.wav')
    soundRain.play
    soundRain.volume = inputRain.value / 100
    soundRain.loop = true
  }
  
  const soundCoffeStart = () => {
    const soundCoffe = new Audio ('assets/sounds/Cafeteria.wav')
    soundCoffe.play
    soundCoffe.volume = inputCoffe.value / 100
    soundCoffe.loop = true
  }
  
  const soundFireplaceStart = () => {
    const soundFireplace = new Audio ('assets/sounds/Lareira.wav')
    soundFireplace.play
    soundFireplace.volume = inputFireplace.value / 100
    soundFireplace.loop = true
  }

  return {soundForestStart, soundRainStart, soundCoffeStart, soundFireplaceStart}
}
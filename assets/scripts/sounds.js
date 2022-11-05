import {inputForest, inputRain, inputCoffe, inputFireplace } from './elements.js'

export const Sounds = () => {
  const soundForest = new Audio('assets/sounds/Floresta.wav')
  const soundRain = new Audio('assets/sounds/Chuva.wav')
  const soundCoffe = new Audio('assets/sounds/Cafeteria.wav')
  const soundFireplace = new Audio('assets/sounds/Lareira.wav')

  let soundsOff = (soundOne, soundTwo, soundThree) => {
    soundOne.pause()
    soundTwo.pause()
    soundThree.pause()
  }

  const soundForestStart = () => {
    soundsOff(soundRain, soundCoffe, soundFireplace)
    soundForest.play()
    inputForest.addEventListener(`input`, () => { soundForest.volume = inputForest.value / 100 })
    soundForest.loop = true
  }
  
  const soundRainStart = () => {
    soundsOff(soundForest, soundCoffe, soundFireplace)
    soundRain.play()
    inputRain.addEventListener(`input`, () => { soundRain.volume = inputRain.value / 100 })
    soundRain.loop = true
  }
  
  const soundCoffeStart = () => {
    soundsOff(soundRain, soundForest, soundFireplace)
    soundCoffe.play()
    inputCoffe.addEventListener(`input`, () => { soundCoffe.volume = inputCoffe.value / 100 })
    soundCoffe.loop = true
  }
  
  const soundFireplaceStart = () => {
    soundsOff(soundRain, soundCoffe, soundForest)
    soundFireplace.play()
    inputFireplace.addEventListener(`input`, () => { soundFireplace.volume = inputFireplace.value / 100 })
    soundFireplace.loop = true
  }

  return {soundForestStart, soundRainStart, soundCoffeStart, soundFireplaceStart}
}
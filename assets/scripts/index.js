import { Sounds } from './sounds.js'
import { Timer } from './timer.js'
import {minutesDisplay, secondsDisplay, numberControl, buttonPlay, buttonStop, buttonAddition, buttonSubtraction, minutes, buttonForest, buttonRain, buttonCoffe, buttonFireplace, inputForest,
inputRain, inputCoffe, inputFireplace, btnLight, btnDark, bgColor, cTextColor, cIconsTimer, cardsColorOne, cardsColorTwo, buttonForestDark, buttonRainDark, buttonCoffeDark,buttonFireplaceDark,} from './elements.js'

const configTimer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  minutes,
  numberControl,
})

const Sound = Sounds()

buttonPlay.addEventListener('click', () => { configTimer.countDown() })
buttonStop.addEventListener('click', () => { configTimer.Hold() })
buttonAddition.addEventListener('click', () => { configTimer.incrementTimer() })
buttonSubtraction.addEventListener('click', () => { configTimer.decrementTimer() })

buttonForest.addEventListener('click', () => {
  buttonRain.classList.remove('hide')
  buttonCoffe.classList.remove('hide')
  buttonFireplace.classList.remove('hide')
  buttonForest.classList.toggle('hide')
  Sound.soundForestStart()
})

buttonRain.addEventListener('click', () => {
  buttonForest.classList.remove('hide')
  buttonCoffe.classList.remove('hide')
  buttonFireplace.classList.remove('hide')
  buttonRain.classList.toggle('hide')
  Sound.soundRainStart()
})

buttonCoffe.addEventListener('click', () => {
  buttonForest.classList.remove('hide')
  buttonRain.classList.remove('hide')
  buttonFireplace.classList.remove('hide')
  buttonCoffe.classList.toggle('hide')
  Sound.soundCoffeStart()
})

buttonFireplace.addEventListener('click', () => {
  buttonForest.classList.remove('hide')
  buttonCoffe.classList.remove('hide')
  buttonRain.classList.remove('hide')
  buttonFireplace.classList.toggle('hide')
  Sound.soundFireplaceStart()
})


btnLight.addEventListener('click', () => {
  bgColor.classList.add('main-bg-dark') // fundo preto
  cTextColor.classList.add('cTxtColor') // cor amarela
  btnLight.classList.add('btn-hide') // esconde sol
  cIconsTimer.classList.add('iconsTimerColor') // troca cor dos svgs
  cardsColorOne.classList.add('cardsColorDark') // troca cor dos svgs
  cardsColorTwo.classList.add('cardsColorDark') // troca cor dos svgs
  btnDark.classList.remove('btn-hide') // mostra lua
})
  
btnDark.addEventListener('click', () => {
  bgColor.classList.remove('main-bg-dark') // fundo branco
  cTextColor.classList.remove('cTxtColor') // cor preta
  btnLight.classList.remove('btn-hide') // esconde lua
  cIconsTimer.classList.remove('iconsTimerColor') // troca cor dos svgs
  cardsColorOne.classList.remove('cardsColorDark') // troca cor dos svgs
  cardsColorTwo.classList.remove('cardsColorDark') // troca cor dos svgs
  btnDark.classList.add('btn-hide') // mostra sol
  
})

buttonForestDark.addEventListener('click', () => {
  buttonRain.classList.remove('hideDark')
  buttonCoffe.classList.remove('hideDark')
  buttonFireplace.classList.remove('hideDark')
  buttonForest.classList.toggle('hideDark')
  Sound.soundForestStart()
})
  
buttonRainDark.addEventListener('click', () => {
  buttonForest.classList.remove('hideDark')
  buttonCoffe.classList.remove('hideDark')
  buttonFireplace.classList.remove('hideDark')
  buttonRain.classList.toggle('hideDark')
  Sound.soundRainStart()
})
  
buttonCoffeDark.addEventListener('click', () => {
  buttonForest.classList.remove('hideDark')
  buttonRain.classList.remove('hideDark')
  buttonFireplace.classList.remove('hideDark')
  buttonCoffe.classList.toggle('hideDark')
  Sound.soundCoffeStart()
})
  
buttonFireplaceDark.addEventListener('click', () => {
  buttonForest.classList.remove('hideDark')
  buttonCoffe.classList.remove('hideDark')
  buttonRain.classList.remove('hideDark')
  buttonFireplace.classList.toggle('hideDark')
  Sound.soundFireplaceStart()
})
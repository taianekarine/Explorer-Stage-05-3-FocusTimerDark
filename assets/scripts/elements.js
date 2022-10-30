let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
const numberControl = 5

const buttonPlay = document.querySelector('.btn-play')
const buttonStop = document.querySelector('.btn-stop')
const buttonAddition = document.querySelector('.btn-addition')
const buttonSubtraction = document.querySelector('.btn-subtraction')
let minutes = Number(minutesDisplay.textContent)

const buttonForest = document.querySelector('.btn-forest')
const buttonRain = document.querySelector('.btn-rain')
const buttonCoffe = document.querySelector('.btn-coffe')
const buttonFireplace = document.querySelector('.btn-fireplace')

const btnLight = document.querySelector('.btn-light')
const btnDark = document.querySelector('.btn-dark')

const bgColor = window.document.body
const cTextColor = document.querySelector('.wrapper-timer')
const cIconsTimer = document.querySelector('.wrapper-icons')
const cardsColorOne = document.querySelector('.wrapper-ambients-sound-1')
const cardsColorTwo = document.querySelector('.wrapper-ambients-sound-2')

const buttonForestDark = document.querySelector('.btn-forest')
const buttonRainDark = document.querySelector('.btn-rain')
const buttonCoffeDark = document.querySelector('.btn-coffe')
const buttonFireplaceDark = document.querySelector('.btn-fireplace')

export {
  minutesDisplay,
  secondsDisplay,
  numberControl,
  buttonPlay,
  buttonStop,
  buttonAddition,
  buttonSubtraction,
  minutes,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFireplace,
  btnLight,
  btnDark,
  bgColor,
  cTextColor,
  cIconsTimer,
  cardsColorOne,
  cardsColorTwo,
  buttonForestDark,
  buttonRainDark,
  buttonCoffeDark,
  buttonFireplaceDark,
}
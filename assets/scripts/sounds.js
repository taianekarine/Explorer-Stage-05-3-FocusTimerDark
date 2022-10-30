export default () => {
  const soundForest = new Audio ('assets/sounds/Floresta.wav')
  const soundRain = new Audio ('assets/sounds/Chuva.wav')
  const soundCoffe = new Audio ('assets/sounds/Cafeteria.wav')
  const soundFireplace = new Audio ('assets/sounds/Lareira.wav')

  const soundForestStart = () => {
    soundForest.play
    soundForest.volume = inputForest.value / 100
    soundForest.loop = true
  }

  const soundRainStart = () => {
    soundRain.play
    soundRain.loop = true
  }

  const soundCoffeStart = () => {
    soundCoffe.play
    soundCoffe.loop = true
  }

  const soundFireplaceStart = () => {
    soundFireplace.play
    soundFireplace.loop = true
  }

  return {soundForestStart, soundRainStart, soundCoffeStart, soundFireplaceStart}
}
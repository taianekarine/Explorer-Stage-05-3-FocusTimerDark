export const Timer = ({minutesDisplay, secondsDisplay, minutes, numberControl}) => {

  let setTimerOut

const Hold = () => { clearTimeout(setTimerOut) }

const updateTimerDisplay = (minutes, seconds) => {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

const countDown = () => {
  setTimerOut = setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0 && seconds <= 0) {
      return
    }

    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes -1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
    countDown()

  }, 1000)
}

const updateMinutes = (minutes) => { minutesDisplay.textContent = String(minutes).padStart(2, "0") }



const incrementTimer = () => {
  minutes = minutes < 55 ? Number(minutes) + numberControl : (minutes = 0);
  updateMinutes(minutes);
}

const decrementTimer = () => {
  minutes = minutes > 5 ? Number(minutes) - numberControl : (minutes = 0);
  updateMinutes(minutes);
}

  return {Hold, updateTimerDisplay, countDown, updateMinutes, incrementTimer, decrementTimer}

}

//Timer face
const hours = document.getElementById("timer-hours"),
      minutes = document.getElementById("timer-minutes"),
      seconds = document.getElementById("timer-seconds");

//Control Buttons
const incTimerMin = document.getElementById("increment-timer-minute"),
      decTimerMin = document.getElementById("decrement-timer-minute"),
      incTimerHr = document.getElementById("increment-timer-hour"),
      decTimerHr = document.getElementById("decrement-timer-hour"),
      incTimerSec = document.getElementById("increment-timer-second"),
      decTimerSec = document.getElementById("decrement-timer-second"),
      startTimer = document.getElementById("start-timer"),
      pauseTimer = document.getElementById("pause-timer"),
      resetTimer = document.getElementById("reset-timer");

let timerInterval;
let finishedAlert;

function addSecond(){
  seconds.innerHTML = ((parseInt(seconds.innerHTML) + 1).toString().length === 1 ?
                        "0" + (parseInt(seconds.innerHTML) + 1).toString() :
                        (parseInt(seconds.innerHTML) + 1).toString());
}

function addMinute(){
  minutes.innerHTML = ((parseInt(minutes.innerHTML) + 1).toString().length === 1 ?
                        "0" + (parseInt(minutes.innerHTML) + 1).toString() :
                        (parseInt(minutes.innerHTML) + 1).toString());
}

function addHour(){
  hours.innerHTML = ((parseInt(hours.innerHTML) + 1).toString().length === 1 ?
                        "0" + (parseInt(hours.innerHTML) + 1).toString() :
                        (parseInt(hours.innerHTML) + 1).toString());
}

function rmvSecond(){
  seconds.innerHTML = ((parseInt(seconds.innerHTML) - 1).toString().length === 1 ?
                        "0" + (parseInt(seconds.innerHTML) - 1).toString() :
                        (parseInt(seconds.innerHTML) - 1).toString());
}

function rmvMinute(){
  minutes.innerHTML = ((parseInt(minutes.innerHTML) - 1).toString().length === 1 ?
                        "0" + (parseInt(minutes.innerHTML) - 1).toString() :
                        (parseInt(minutes.innerHTML) - 1).toString());
}

function rmvHour(){
  hours.innerHTML = ((parseInt(hours.innerHTML) - 1).toString().length === 1 ?
                        "0" + (parseInt(hours.innerHTML) - 1).toString() :
                        (parseInt(hours.innerHTML) - 1).toString());
}



function beginCount(){
  finishedAlert = new Audio();
  finishedAlert.src = "./media/mp3/old-fashioned-school-bell-daniel_simon.mp3";
  timerInterval = setInterval(
    () => {
      if(seconds.innerHTML === "00") {
        seconds.innerHTML = "59";
        if(minutes.innerHTML === "00") {
          minutes.innerHTML = "59";
          if (hours.innerHTML === "00"){
          } else {
            hours.innerHTML = ((parseInt(hours.innerHTML)-1).toString().length === 1 ?
            "0" + (parseInt(hours.innerHTML)-1).toString() :
            (parseInt(hours.innerHTML)-1).toString());
          }
        } else {
          minutes.innerHTML = ((parseInt(minutes.innerHTML)-1).toString().length === 1 ?
          "0" + (parseInt(minutes.innerHTML)-1).toString() :
          (parseInt(minutes.innerHTML)-1).toString());
        }
      } else {
        seconds.innerHTML = ((parseInt(seconds.innerHTML)-1).toString().length === 1 ?
        "0" + (parseInt(seconds.innerHTML)-1).toString() :
        (parseInt(seconds.innerHTML)-1).toString());
      }
      //Checking if we're done
      if(seconds.innerHTML === "00" && minutes.innerHTML === "00" && hours.innerHTML === "00"){
        finishedAlert.play();
        pauseCount();
      }
    }, 1000);
}

function pauseCount(){
  clearInterval(timerInterval);
}

function clearCount(){
  pauseCount();
  finishedAlert.pause();
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
}

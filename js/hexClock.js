const startTime = new Date();
let currTime = startTime;
const clock = document.getElementById("clock");
const date = document.getElementById("date");
const body = document.getElementById("clock-body");
let time = {
  seconds: startTime.getSeconds(),
  minutes: startTime.getMinutes(),
  hours: startTime.getHours(),
  day: startTime.getDate(),
  month: startTime.getMonth(),
  year: startTime.getFullYear()
}
let backgroundColor = "#" + time.hours + time.minutes + time.seconds;

function setClock(time){
  clock.innerHTML = "#" + time.hours + time.minutes + time.seconds;
}

function setDate(time){
  date.innerHTML = time.day + "/" + time.month + "/" + time.year;
}

function setBackground(time){
  body.style.backgroundColor = "#" + time.hours + time.minutes + time.seconds;
}

function updateTime(time){
  if(time.seconds === 59) {
    time.seconds = "00";
    if(time.minutes === 59) {
      time.minutes = 0;
      if (time.hours === 23){
        currTime = new Date();
        /*
        Requesting a new Date daily - ensures I don't have to calculate days in
        a month, leap years, etc., and happens infrequently enough so that there
        is no time delay as would be the case if I did this for every second
        */
        time = {
          seconds: currTime.getSeconds(),
          minutes: currTime.getMinutes(),
          hours: currTime.getHours(),
          days: currTime.getDate(),
          month: startTime.getMonth(),
          year: startTime.getFullYear()
        }
      } else {
        time.hours ++;
      }
    } else {
      time.minutes ++;
    }
  } else {
    time.seconds ++;
  }

  if(time.seconds.toString().length === 1){
    time.seconds = "0" + time.seconds.toString();
  }
  if(time.minutes.toString().length === 1){
    time.minutes = "0" + time.minutes.toString();
  }
  if(time.hours.toString().length === 1){
    time.hours = "0" + time.hours.toString();
  }

  setClock(time);
  setDate(time);
  setBackground(time);
}

setInterval(function(){updateTime(time, currTime)}, 1000);

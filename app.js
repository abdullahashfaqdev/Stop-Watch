// let count = 0;
// let interval;
// function timer(){
//     count++;
//    document.write(count + "<br>")

// }
// interval = setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)

// },5000)

let min = 0;
let sec = 0;
let msec = 0;
let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
let msecHeading = document.getElementById("msec");
let interval;

function timer() {
  msec++;
  msecHeading.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    secHeading.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minHeading.innerHTML = min++;
    sec = 0;
  }
}

function start() {
  clearInterval(interval);
  interval = setInterval(timer, 10);
 
}

function pause() {
  clearInterval(interval);
}

function reset() {
  min = 0;
  sec = 0;
  msec = 0;
  minHeading.innerHTML = min;
  secHeading.innerHTML = sec;
  msecHeading.innerHTML = msec;
  pause();
}

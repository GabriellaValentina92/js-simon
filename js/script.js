const countDown = document.querySelector('.countdown_clock')

// countdown date
let countDownDate = new Date("April 28, 2023 09:30:00").getTime();

// setInterval function
let counter = setInterval(function() {

  // today's date
  let now = new Date().getTime();

  // distance between now and the countdowndate
  let distance = countDownDate - now;

  // Calculate time
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // result on screen
  countDown.innerHTML = day + ":" + hours + ":"
  + minutes + ": " + seconds;

  // stop to zero
  if (distance < 0) {
    clearInterval(counter);
  }
}, 1000);
const countDown = document.querySelector('.countdown_clock')

// Set the date we're counting down to
let countDownDate = new Date("April 28, 2023 09:30:00").getTime();

// Update the count down every 1 second
let counter = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  countDown.innerHTML = day + ":" + hours + ":"
  + minutes + ": " + seconds;

  // If the count down is finished
  if (distance < 0) {
    clearInterval(counter);
  }
}, 1000);
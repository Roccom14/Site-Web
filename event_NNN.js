var audioElement = new Audio('1.mp3');
audioElement.addEventListener('loadeddata', () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
})

// Set the date we're counting down to
var countDownDate = new Date("nov 22, 2019 14:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function(){

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = "La branlette c'est dans : " + days + " jours " + hours + " heures "
  + minutes + " min " + seconds + " sec";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "VAS-Y !!! C'EST LE Destroy Dick December !!!";
    document.getElementById("countdown").style.color="red";
    audioElement.play();
  }
}, 1000);

// SET TIME
let date = new Date().toLocaleString();

// Goal Array
let homeScoreArray = [];
let guestScoreArray = [];
document.getElementById("time").innerText = date;
//SET SCORE TO HOME

let homeScore = document.getElementById("scoreEl-home");
let score = 0;

function addOneHome() {
  score += 1;
  console.log(score);
  homeScore.textContent = score;
  myColor();
}
function addTwoHome() {
  score += 2;
  console.log(score);
  homeScore.textContent = score;
  myColor();
}

function addThreeHome() {
  score += 3;
  console.log(score);
  homeScore.textContent = score;
  myColor();
}

console.log(score);
// GUEST SCORE
let guestScore = document.getElementById("scoreEl-guest");
let scoreGuest = 0;
function addOneGuest() {
  scoreGuest += 1;
  console.log(scoreGuest);
  guestScore.textContent = scoreGuest;
  myColor();
}
function addTwoGuest() {
  scoreGuest += 2;
  console.log(scoreGuest);
  guestScore.textContent = scoreGuest;
  myColor();
}

function addThreeGuest() {
  scoreGuest += 3;
  console.log(scoreGuest);
  guestScore.textContent = scoreGuest;
  myColor();
}
console.log(scoreGuest);

// SET UP THE SCORE FONT COLOR
function myColor() {
  if (score > scoreGuest) {
    document.getElementById("scoreEl-home").style.color = "#fca311";
    document.getElementById("scoreEl-guest").style.color = "#f94f6d";
  } else if (score < scoreGuest) {
    document.getElementById("scoreEl-guest").style.color = "#fca311";
    document.getElementById("scoreEl-home").style.color = "#f94f6d";
  } else {
    document.getElementById("scoreEl-home").style.color = "#f94f6d";
    document.getElementById("scoreEl-guest").style.color = "#f94f6d";
  }
}

// NEW GAME
function newgame() {
  score = 0;
  homeScore.textContent = score;
  scoreGuest = 0;
  guestScore.textContent = scoreGuest;
}

// COUNT DOWN
// Set the date we're counting down to
var countDownDate = new Date("August 9, 2022 22:19:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerText =
    minutes + " m : " + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerText = "EXPIRED";
  }
}, 1000);

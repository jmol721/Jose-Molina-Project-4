// Timer componet
var timeLeft = 15;
var timeEl = document.getElementById('seconds');
timeEl.textContent = timeLeft;


// decrement timeLeft by 1 every second until 0 timeLeft
function countdownTimer () {
    var timerInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeEl.textContent = timeLeft
            timeLeft--;
            console.log("timeLeft :", timeLeft);
        }  else {
            clearInterval(timerInterval);
            timeEl.textContent = 0;
            document.getElementById("timer").setAttribute("class", "timer0");
            console.log("timeLeft :", timeLeft);
        }
    }, 1000);
}

// Decrement timeLeft by penalty
function incorrectPenaltyTimer (penalty) {
    timeLeft -= penalty;
}



//Quiz component
var penalty = 2;

// attaching quiz button to timer function
var startQuizBtn = document.getElementById("start-button");

startQuizBtn.onclick = countdownTimer;

//Test button
var wrongQuestion = document.getElementById("penalty-button");


wrongQuestion.onclick = () => incorrectPenaltyTimer(penalty);
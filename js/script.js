// Timer componet
var timeLeft = 2;
var timeEl = document.getElementById('seconds');
timeEl.textContent = timeLeft;


function countdownTimer () {
    var timerInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeEl.textContent = timeLeft
            timeLeft--;
        }  else {
            clearInterval(timerInterval);
            document.getElementById("timer").setAttribute("class", "timer0");
        }
    }, 1000);

}


// attaching quiz button to timer function
var startQuizBtn = document.getElementById("start-button");

startQuizBtn.onclick = countdownTimer;
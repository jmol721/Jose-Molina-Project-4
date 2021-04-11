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
// var wrongQuestion = document.getElementById("penalty-button");


// wrongQuestion.onclick = () => incorrectPenaltyTimer(penalty);


// High Score component
var highScoreListCounter = 1;
var highScoreList = document.querySelector("#high-score-list");

var createHighScoreEl = function(highScoreObject) {
    var highScoreListEl = document.createElement("li");
    highScoreListEl.className = "high-score-element";
    highScoreListEl.setAttribute("high-score-id", highScoreListCounter);
    highScoreListEl.textContent = `${highScoreListCounter}. ${highScoreObject.name} - ${highScoreObject.score}`;

    highScoreList.appendChild(highScoreListEl);
}

// Testing adding high score
// var mockHighScore = {name: 'jose', score: 2};
// createHighScoreEl(mockHighScore);


// funciton for hiding quiz container
var hideQuizContainer = function() {
    var quizContainerEl = document.getElementById('main-quiz-container-id');
    quizContainerEl.className = 'hide';
}

// fucntion for displaying high score
var displayHighScore = function() {
    hideQuizContainer();
    var viewHighScoreEl = document.getElementById("view-high-score-id");
    viewHighScoreEl.className = 'show';
    console.log('hello');
}

var highScoreLink = document.getElementById("view-highscore-switch");

highScoreLink.onclick = displayHighScore;
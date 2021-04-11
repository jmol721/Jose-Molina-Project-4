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


// funciton for hiding and showing quiz container
var hideQuizContainer = function() {
    var quizContainerEl = document.getElementById('main-quiz-container-id');
    quizContainerEl.className = 'hide';
}

var showQuizContainer = function() {
    var quizContainerEl = document.getElementById('main-quiz-container-id');
    quizContainerEl.className = "main-quiz-container";
}

// Testing
// var wrongQuestion = document.getElementById("penalty-button");
// wrongQuestion.onclick = () => incorrectPenaltyTimer(penalty);


// High Score component
var highScoreLink = document.getElementById("view-highscore-switch");
var highScoreListCounter = 1;
var highScoreParentList = document.querySelector("#high-score-list");
// create initial high score list to an empty list
var highScoreList = [];

var goBackButton = document.getElementById("go-back");
var clearHighScoreButton = document.getElementById("clear-high-scores");

// fucntion for displaying high score
var showHighScore = function() {
    hideQuizContainer();
    var viewHighScoreEl = document.getElementById("view-high-score-id");
    viewHighScoreEl.className = 'show';
}

var hideHighScore = function() {
    var viewHighScoreEl = document.getElementById("view-high-score-id");
    viewHighScoreEl.className = 'hide';
    showQuizContainer();
}

highScoreLink.onclick = showHighScore;
goBackButton.onclick = hideHighScore;


// function to add new high score
var createHighScoreEl = function(highScoreObject) {
    var highScoreListEl = document.createElement("li");
    highScoreListEl.className = "high-score-element";
    highScoreListEl.setAttribute("high-score-id", highScoreListCounter);
    highScoreListEl.textContent = `${highScoreListCounter}. ${highScoreObject.name} - ${highScoreObject.score}`;

    highScoreParentList.appendChild(highScoreListEl);

    highScoreObject.id = highScoreListCounter;
    highScoreList.push(highScoreObject);

    highScoreListCounter++;
}

// function to clear high scores
var clearHighScore = function() {
    // loop through highScoreList and remove child elements from parent element
    for (var i = 0; i < highScoreList.length; i++) {
        var highScore = highScoreList[i];
        var idOfElement = highScore.id;

        var childElementToRemove = document.querySelector(".high-score-element[high-score-id='"+ idOfElement +"']")
        highScoreParentList.removeChild(childElementToRemove);
    }
    // reset to empty list
    highScoreList = [];
}

clearHighScoreButton.onclick = clearHighScore;


// Testing
var mockHighScore = {name: 'jose', score: 2};
createHighScoreEl(mockHighScore);

var mockHighScore2 = {name: 'poop', score: 100};
createHighScoreEl(mockHighScore2);

// Timer componet
var timeLeft = 0;
var timeEl = document.getElementById('seconds');
timeEl.textContent = timeLeft;


// decrement timeLeft by 1 every second until 0 timeLeft
function countdownTimer () {
    var timerInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeEl.textContent = timeLeft
            timeLeft--;
            // console.log("timeLeft :", timeLeft);
        }  else {
            clearInterval(timerInterval);
            timeEl.textContent = 0;
            document.getElementById("timer").setAttribute("class", "timer0");
            // console.log("timeLeft :", timeLeft);
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


// funciton for hiding and showing quiz container when clicking high score
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

// Quiz
var questions = [
    {
        question: "Commonly used data types DO not include:",
        answers: {
            1: "1. strings",
            2: "2. booleans",
            3: "3. alerts",
            4: "4. numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed with ___.",
        answers: {
            1: "1. quotes",
            2: "2. curly brackets",
            3: "3. parenthesis",
            4: "4. square brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store __.",
        answers: {
            1: "1. numbers and strings",
            2: "2. other arrays",
            3: "3. booleans",
            4: "4. all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables.",
        answers: {
            1: "1. commas",
            2: "2. curly brackets",
            3: "3. quotes",
            4: "4. parenthesis"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "1. JavaScript",
            2: "2. terminal/bash",
            3: "3. for loops",
            4: "4. console.log"
        },
        correctAnswer: "4"
    }
];
var currentQuestionIndex = 0;
var score = 0;

var updateQuestionContainerWithQuestion = function(question) {
    var questionsPage = document.getElementById("question-container-id");
    questionsPage.className = "question-container";
    document.getElementById("quiz-question").textContent = question.question;
    document.getElementById("answer-1").textContent = question.answers[1];
    document.getElementById("answer-2").textContent = question.answers[2];
    document.getElementById("answer-3").textContent = question.answers[3];
    document.getElementById("answer-4").textContent = question.answers[4];
}

//function for showing and hiding start quiz page
var hideMainQuizPage = function() {
    var startPage = document.getElementById("start-quiz-container");
    startPage.className = "hide";
};

//start quiz function
var startQuiz = function() {
    score = 0;
    timeLeft = 60;

    hideMainQuizPage();
    updateQuestionContainerWithQuestion(questions[currentQuestionIndex]);
    countdownTimer();
}

startQuizBtn.onclick = startQuiz;


var verifyAnswer = function(answerSelectedId) {
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answerSelectedId === correctAnswer) {
        score += 5;
        return "Correct!";
    } else {
        incorrectPenaltyTimer(1);
        return "Wrong!";
    }
}

// function for answering question with selected answer id as an argument
var answerSelected = function(clickEvent) {
    var answerSelectedId = clickEvent.target.value;
    var result = verifyAnswer(answerSelectedId);
    document.getElementById("previous-answer-results").textContent = result;
    if (currentQuestionIndex >= questions.length - 1 || timeLeft <= 0) {
       // TODO - final score component 
       console.log('all done');
    } else {
        currentQuestionIndex ++;
        updateQuestionContainerWithQuestion(questions[currentQuestionIndex]);
    }

    console.log('currentQuestionIndex :' , currentQuestionIndex);
}

// set answer button onclicks 
var answer1 = document.getElementById("answer-1");
answer1.onclick = answerSelected;

var answer2 = document.getElementById("answer-2");
answer2.onclick = answerSelected;

var answer3 = document.getElementById("answer-3");
answer3.onclick = answerSelected;

var answer4 = document.getElementById("answer-4");
answer4.onclick = answerSelected;
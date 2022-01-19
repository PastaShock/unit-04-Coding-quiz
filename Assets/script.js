var questions = [{
        title: "Commonly used data type Do Not include:---",
        choices: ["strings", "booleance", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed within:---",
        choices: ["quotes", "Curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store:---",
        choices: ["numbers and strings", "others Arrays", "booleances", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within --- when being assigned to variables ",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
        choices: ["JavaScript", "terminal/bash", "alerts", "console.log"],
        answer: "console.log"
    },
]

//declare DOM element variables
var time = 15;
var timer = document.getElementById('timer');
var score = document.getElementById('score');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var restart = document.getElementById('restart');
var start = document.getElementById('start');
var AnswersTracker = {
    correct: 0,
    incorrect: 0,
    init: '',
    time: ''
}
var currentQ = 0;
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));

//write a function that will keep the timer running
function gameTimer() {
    timeInterval = setInterval(function () {
        timer.innerText = time;
        if (timer < 0) {
            outOfTime();
        } else {
            time--;
        }
    }, 1000)
}

//create function to write new questions to the page
function writeNewQuestion(q) {
    answersList = questions[q].choices.length;
    clearField();
    for (var i = 0; i < answersList; i++) {
        var questionList = document.createElement('li');
        var questionItem = document.createElement('a');
        questionList.setAttribute('class', 'list-group-item');
        // questionItem.setAttribute('class', );
        questionItem.textContent = questions[q].choices[i];
        //set the value of the answer
        questionList.setAttribute('onclick', 'answer(' + i + ', ' + q + ')');
        questionList.append(questionItem);
        answers.append(questionList);
    }
    question.textContent = questions[q].title;
}

function answer(a, q) {
    if (questions[q].choices[a] === questions[q].answer) {
        AnswersTracker.correct += 1;
    } else {
        AnswersTracker.incorrect += 1;
        time--
    }
    console.log(AnswersTracker);
    afterSelection();
};

//check if current question is the last and time has not run out
function afterSelection() {
    if (currentQ < questions.length) {
        currentQ++;
        writeNewQuestion(currentQ);
    } else if (timer > 0) {
        winCondition();
    } else {
        outOfTime();
    };
};

function clearField() {
    //clear answers and questions from last page
    question.textContent = '';
    answers.innerHTML = '';
    timer.textContent = 0;
}

//start the game from the button
function initializeGame() {
    currentQ = 0;
    time = time;
    start.setAttribute('onclick', 'startGame()');
    restart.setAttribute('onclick', 'startGame()');
}

function startGame() {
    writeNewQuestion(currentQ);
    start.setAttribute('visibility', 'hidden');
    gameTimer();
}

//win or lose conditions
function outOfTime() {
    clearInterval(timeInterval);
    clearField();
    question.textContent = 'No time remaining';
    submitScores();
}

function winCondition() {
    clearField();
    question.textContent = 'YOU WIN';
    submitScores();
}

//submit scores to the local storage
function submitScores() {
    initials = prompt('enter your initials');
    AnswersTracker.init = initials;
    AnswersTracker.time = timer.textContent;
    allScores.push(storedScores += AnswersTracker);
    localStorage.setItem('userData', JSON.stringify(allScores));
}

initializeGame();
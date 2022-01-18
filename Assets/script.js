var Questions = [
    {Question: [
        {question: "question"},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "true"
        }}
    ]},
    {Question: [
        {question: "question"},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "true"
        }}
    ]},
    {Question: [
        {question: "question"},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "true"
        }}
    ]},
    {Question: [
        {question: "question"},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "true"
        }}
    ]},
    {Question: [
        {question: "question"},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "false"
        }},
        {option: {
            text: "option",
            value: "true"
        }}
    ]}
]

//declare DOM element variables
var time = 20;
var timer = document.getElementById('score');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var start = document.getElementById('start');
var AnswersTracker = {
    correct: 0,
    incorrect: 0,
}
var currentQ = 0;

//create function to write new questions to the page
function writeNewQuestion(q) {
    answersList = Questions[q].Question.length - 1;
    //clear answers and questions from last page
    question.textContent = '';
    answers.innerHTML = '';
    for (var i = 1; i <= answersList; i++) {
        var questionList = document.createElement('li');
        var questionItem = document.createElement('a');
        questionList.setAttribute('class', 'list-group-item');
        // questionItem.setAttribute('class', );
        questionItem.textContent = Questions[q].Question[i].option.text
        //set the value of the answer
        questionList.setAttribute('onclick', 'answer(' + Questions[q].Question[i].option.value + ')');
        questionList.append(questionItem);
        answers.append(questionList);
    }
    question.textContent = Questions[q].Question[0].question;
}

//function to record clicked answer as either right or wrong
function answer(a) {
    if (a === true)  {
        AnswersTracker.correct += 1;
    } else {
        AnswersTracker.incorrect += 1;
    }
    console.log(AnswersTracker);
    currentQ++;
    writeNewQuestion(currentQ);
}

//start the game from the button
start.setAttribute('onclick', 'startGame()')
function startGame() {
    writeNewQuestion(currentQ);
    start.setAttribute('visibility', 'hidden');
}

//win or lose conditions
function outOfTime() {
    if (timeRemaining <= 0) {
        answers.innerHTML = '';
        question.textContent = 'No time remaining';       
    }
}
var startButton = document.getElementById('start-btn')
var questionEl = document.getElementById('question')
var answerButtons = document.getElementsByClassName('btn')
var timerEl = document.getElementById('timer')
// var submitBtn = document.querySelector("#submit");
// var initialsEl = document.querySelector("#initials");
var feedbackEl = document.getElementById('feedback')

var questionList = [
    {
        question: "Commonly used data types DO not Include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correct: "2. booleans",
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correct: "3. parenthesis",
    },
    {
        question: "Arrays in Javascript can be used to store _______.",
        options: ["1. numbers of strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: "4. all of the above",
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correct: "3. quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: "4. console.log",
    },
];

var time = questionList.length * 15;
console.log(time);
var timerID
var currentQuestionIndex = 0

function logStart() {
    console.log("=====================================")
}
function logEnd() {
    console.log("*****************************************")
}

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    // hides home page and displays quiz container
    document.getElementById('home').style.display = 'none'
    //display quiz section
    document.getElementById('quiz-container').style.display = 'block'
    //start timer
    timerID = setInterval(clockTick, 1000)
    //show start time
    timerEl.textContent = time
    // show first question
    showQuestion()
}

//timer you'll need to check if we've reached the last question or we ran out of time -> end the Timer and call endQuiz()

function showQuestion() {
    console.log("Showing question function running");
    // get the current question from the array
    var currentQuestion = questionList[currentQuestionIndex];
    console.log("Show Question: ", currentQuestion);
    // display the question
    questionEl.innerText = currentQuestion.question
    // display the options
    var options = currentQuestion.options
    console.log(options)
    // loop through the options and display them
    for (var i = 0; i < options.length; i++) {
        answerButtons[i].innerText = options[i]
        answerButtons[i].addEventListener('click', selectAnswer)
    }
}

function selectAnswer(e) {
    console.log("SELECTED")
    //
    console.log(e);
    var selectedButton = e.target
    // console.log(selectedButton)
    var selectedAnswer = selectedButton.innerText
    console.log(selectedAnswer)
    var currentQuestion = questionList[currentQuestionIndex];
    // console.log(currentQuestion)
    var correctAnswer = currentQuestion.correct
    console.log(correctAnswer)
    if (selectedAnswer === correctAnswer) {
        //if it's correct do correct stuff
        console.log('Correct!');
        time += 10
        feedbackEl.textContent = 'Correct!'
    } else {
        //penalize time
        console.log('Wrong!');
        time -= 15
        feedbackEl.textContent = 'Wrong!'
    }

    setNextQuestion()

}

// load next question
function setNextQuestion() {
    console.log("Setting next question")
    // if I'm not at the end of my array ->
    var fullLength = questionList.length
    console.log(fullLength)
    if (currentQuestionIndex <= fullLength) {
        // currentQuestionIndex++
        showQuestion()
    } else {
        endQuiz()
        console.log('end of quiz')

    }
    currentQuestionIndex++
}

function endQuiz() {
    logStart()
    console.log("end of quiz")
    logEnd
}

//populate answers on page


//function to check for correct answer

// if else statement for incorrect answers

//display Correct! or Wrong! answer

//timer
function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

// all done screen - enter initials and submit to view high scores

// display scores

// saves submit form info into local storage

// gathers data from previous scores and sorts highest to lowest












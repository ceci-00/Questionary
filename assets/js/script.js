var startButton = document.getElementById('start-btn')
console.dir(startButton)
var questionEl = document.getElementById('question')
var answerButtons = document.getElementsByClassName('btn')
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
    // hides home page and starts quiz with 1st question
    document.getElementById('home').style.display = 'none'
    document.getElementById('quiz-container').style.display = 'block'

    // questionEl.innerText(shuffleQuestions)
    // console.log(shuffleQuestions)
    // setNextQuestion()
    showQuestion()
}
// load next question
function setNextQuestion() {
    logStart()
    console.log("Setting next question")
    // if I'm not at the end of my array -> 
    //currentQuestionIndex ++ 
    // showQuestion()
    //else {
    // endQuiz()
    // }
    logEnd()
}

//timer you'll need to check if we've reached the last question or we ran out of time -> end the Timer and call endQuiz()

function showQuestion() {
    console.log("Showing question function running");

    var currentQuestion = questionList[currentQuestionIndex];
    console.log("SHow Question: ", currentQuestion);
    // randomize selection of questions

    questionEl.innerText = currentQuestion.question
    currentQuestion.options.forEach((option, index) => {
        answerButtons[index].innerText = option;
        answerButtons[index].addEventListener('click', selectAnswer)
    })
}

function selectAnswer(e) {
    console.log("SELECTED")
    console.log(e);
    var selectedButton = e.target
    console.log(selectedButton)
    var selectedAnswer = selectedButton.innerText
    console.log(selectedAnswer)
    var currentQuestion = questionList[currentQuestionIndex];
    console.log(currentQuestion)
    var correctAnswer = currentQuestion.correct
    console.log(correctAnswer)
    //if it's correct do correct stuff
    //else do incorrect stuff

    setNextQuestion()

}

//varr questionE1 = document.getElementById("question");
//var optionId = document.getElementById("option");
//
//function startQuiz(event) {
//  event.preventDefault;
//
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

//populate answers on page

//function to check for correct answer

// if else statement for incorrect answers

//display Correct! or Wrong! answer

//timer

// all done screen - enter initials and submit to view high scores

// display scores

// saves submit form info into local storage

// gathers data from previous scores and sorts highest to lowest












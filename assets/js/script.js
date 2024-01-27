var initialPage = document.createElement < h1 > ("starter", "Coding Quiz Challenge");
append.getElementById(initialPage);



var questionE1 = document.getElementById("question");
var optionId = document.getElementById("option");

function startQuiz(event) {
    event.preventDefault;
}
var questionList = [
    {
        question: "Commonly used data types DO not Include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "2. booleans",
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis",
    },
    {
        question: "Arrays in Javascript can be used to store _______.",
        options: ["1. numbers of strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above",
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log",
    },
];

// randomize selection of questions

//populate answers on page

//function to check for correct answer

// if else statement for incorrect answers

//display Correct! or Wrong! answer

//timer

//load next question

// all done screen - enter initials and submit to view high scores

// display scores

// saves submit form info into local storage

// gathers data from previous scores and sorts highest to lowest

// questions html
// <div class="container">
//    <div id="quiz" class="justify-center flex-column">
//        <h2 id="question">Enter Question Here</h2>
//        <div id="answer-btns">
//            <button class="btn" id="option">Answer 1</button>
//            <button class="btn" id="option">Answer 2</button>
//            <button class="btn" id="option">Answer 3</button>
//            <button class="btn" id="option">Answer 4</button>
//        </div>
//    </div>
// </div>


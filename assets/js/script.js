var startButton = document.getElementById('start-btn')
var questionEl = document.getElementById('question')
var answerButtons = document.querySelectorAll('#answer-btns button')
var timerEl = document.getElementById('timer')
var feedbackEl = document.getElementById('feedback')
var quizContainer = document.getElementById('quiz-container')
var clearScoresButton = document.getElementById('clear-btn')
var goBackButton = document.getElementById('restart-btn')

// setting up the questions and answers
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

// setting up the timer
var time = questionList.length * 15;
console.log(time);
var timerID
// setting up the current question
var currentQuestionIndex = 0
var currentQuestion = questionList[currentQuestionIndex];

// start quiz
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

// show question
function showQuestion() {
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

// select answer
function selectAnswer(e) {
    console.log("SELECTED");
    console.log(e);
    var selectedButton = e.target;
    console.log(selectedButton);
    var selectedAnswer = selectedButton.innerText;
    console.log(selectedAnswer);
    var correctAnswer = currentQuestion.correct;
    console.log(correctAnswer);
    if (selectedAnswer === correctAnswer) {
        //if it's correct
        console.log('Correct!');
        time += 10;
        feedbackEl.textContent = 'Correct!';
        feedbackEl.style.color = 'green';
    } else {
        //if wrong, penalize time
        console.log('Wrong!');
        time -= 15;
        feedbackEl.textContent = 'Wrong!';
        feedbackEl.style.color = 'red';
    }

    // Set a timeout to display the feedback and move to the next question, unless it's the last question
    setTimeout(function () {
        feedbackEl.textContent = '';
        if (currentQuestionIndex < questionList.length - 1) {
            setNextQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

// load next question
function setNextQuestion() {
    console.log("Setting next question");
    currentQuestionIndex++;
    // check if there are more questions
    if (currentQuestionIndex < questionList.length) {
        currentQuestion = questionList[currentQuestionIndex];
        showQuestion();
    } else {
        // if there are no more questions, end the quiz
        endQuiz();
        console.log('end of quiz');
    }
}

// end quiz
function endQuiz() {
    console.log("end of quiz");
    clearInterval(timerID);
    quizContainer.style.display = 'none';
    // show the end screen
    document.getElementById('end-container').style.display = 'block';
    // show the final score
    document.getElementById('final-score').textContent = time;
    finalScore();
}

// update the timer in the top right corner
function clockTick() {
    // update the time
    time--;
    timerEl.textContent = time;
    // check if the time has run out
    if (time <= 0) {
        endQuiz();
    }
}

// all done screen - enter initials and submit to view high scores
function finalScore() {
    // get the form element
    var form = document.getElementById('end-form');
    // add an event listener to the form
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // get the initials from the input
        var initials = document.getElementById('initials').value;
        // get the high scores from local storage
        var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        // push the new score into the high scores
        highScores.push({ initials: initials, score: time });
        // save the high scores back to local storage
        localStorage.setItem('highScores', JSON.stringify(highScores));
        // redirect to the high scores page
        window.location.href = 'highscores.html';
    });
}

// clear high scores on highscores page
function clearScores() {
    // clear the high scores from local storage
    localStorage.removeItem('highScores');
    // reload the page
    window.location.reload();
}

// go back to the home page from the highscores page
function goBack() {
    window.location.href = 'index.html';
}

// display scores
// gathers data from previous scores and sorts highest to lowest
function highScores() {
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    // get the high scores list element
    var highScoresList = document.getElementById('high-scores-list');
    // loop through the high scores and display them highest to lowest
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement('li');
        li.textContent = highScores[i].initials + ' - ' + highScores[i].score;
        highScoresList.appendChild(li);
    }

    // event listener for clear scores button
    var clearScoresButton = document.getElementById('clear-btn');
    clearScoresButton.addEventListener('click', clearScores);

    // event listener for go back button
    var goBackButton = document.getElementById('restart-btn');
    goBackButton.addEventListener('click', goBack);
}

document.addEventListener('DOMContentLoaded', function () {
    highScores();
});

// event listener for the start button
startButton.addEventListener('click', startQuiz);









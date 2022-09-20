var currentScore = 0;
var interval
var startBtnEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var indexQuestion = 0;
var containerEl = document.querySelector("#container")
var mainEl = document.querySelector("main")




var secondsLeft = 70;

function countdown() {
    interval = setInterval(function () {
        secondsLeft--
        timerEl.textContent = "time: " + secondsLeft
    }, 1000)
}




startBtnEl.addEventListener("click", function () {
    containerEl.remove()
    countdown()
    askQuestion()
})



//questions in an array of objects
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ______.",
        choices: ["quotes", "square brackets", "curly brackets", "parentheses",],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and stings", "other arrays", "booleans", "all of the above",],
        answer: "all of the above"
    },
    {
        question: "A useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["console.log", "for loops", "terminal / bash", "JavaScript",],
        answer: "console.log"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["curly brackets", "parenthesis", "commas", "quotes",],
        answer: "quotes"
    },
];



function askQuestion() {
    var section = document.createElement("section")
    section.setAttribute("id", "question")
    var currentQuestionObject = questions[indexQuestion]
    var questionText = document.createElement("h2");
    questionText.textContent = currentQuestionObject.question
    section.append(questionText);
    for (var i = 0; i < currentQuestionObject.choices.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = currentQuestionObject.choices[i]
        section.append(buttonEl)
    };
    mainEl.append(section) };
    
    
    
    
    //creat an h2 tag, give it the text of the question
    //creat a ul tag 
    //for each answer, creat an li tag

    //add all this stuff to the DOM


    //when the user clicks stat, what needs to happen:
    //timer starts
    //display a question
    //askQuestion
    //figure out how to set the answer 
    //turn questions into an array and loop through
    //event listeners
    //clicking the start button 
    //when the user chooses an answer


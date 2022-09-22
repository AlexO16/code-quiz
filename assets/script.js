//Starting variable values
var currentScore = 0;
var interval
var indexQuestion = 0;
var secondsLeft = 75;



//Select the existing elements on the page
var startBtnEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var containerEl = document.querySelector("#container")
var mainEl = document.querySelector("main")


//function to run the timer during the quiz
function countdown() {
    //set an interval for the timer to run on
    interval = setInterval(function () {
        //decrease seconds left by 1
        secondsLeft--
        //rewrite the timer elements text content to have the current time left
        timerEl.textContent = "Time: " + secondsLeft;
        //if the timer runs out
        if (secondsLeft === 0) {
            //end the interval running the timer
            clearInterval(interval);
        }
    }, 1000)
}


//listen for a click on the start button
startBtnEl.addEventListener("click", function () {
    //remove the container element holding the landing page
    containerEl.remove()
    //start the timer
    countdown()
    //ask the first question
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
    //create a section element
    var section = document.createElement("section")
    //give the section element an id of question
    section.setAttribute("id", "question")
    //Create a variable that stores the current question object from the questions array
    var currentQuestionObject = questions[indexQuestion]
    //Create an h2 element to display the question
    var questionText = document.createElement("h2");
    //Display the question by setting the text content of the h2 element to the current questions's object question property
    questionText.textContent = currentQuestionObject.question
    //Append the h2 element to the section element
    section.append(questionText);

    //for every answer choice for the current question
    for (var i = 0; i < currentQuestionObject.choices.length; i++) {
        //Create a button element
        var buttonEl = document.createElement("button");
        //set the button's text to be the choice at the current index in the for loop
        buttonEl.textContent = currentQuestionObject.choices[i]
        //Append the button to the section elemnet 
        section.append(buttonEl)

    };

    //Append the section holding the question to the main element of the page
    mainEl.append(section)

    //On the whole section element, listen for a click
    section.addEventListener("click", function (event) {
        //Clear the current question and answer
        //If the answer clicked is correct then do this
        console.log(event.target.textContent)
        mainEl.innerHTML = " "
        indexQuestion++
        if (event.target.textContent === currentQuestionObject.answer) {
            

        } else {
            wrongAnswer()
           
        }

        if(indexQuestion === questions.length){
            quizEnd()
            
             //check if indexQuestion is === length of the question array
            //if so end game gameEnd()
        
        }
        else{
        askQuestion()
        
        }
    })
};

function wrongAnswer(){
    secondsLeft -= 15; 
}

function quizEnd(){
   mainEl.innerHTML = "";
   var createH1 = document.createElement("div");
   createH1.setAttribute("id", "createH1");
   createH1.textContent = "All Done!"
    mainEl.appendChild(createH1);
    if (secondsLeft >= 0) { //timer does not stop
        var createH2 = document.createElement("div");
        createH2.setAttribute("id", "createH2");
        createH2.textContent = "Your final score is: " + secondsLeft;
        mainEl.appendChild(createH2);
    }



    
   
   //add name for score 
   //stop time for score
   //return
    
}


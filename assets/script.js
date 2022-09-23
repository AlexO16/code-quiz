//Starting variable values
var currentScore = 0;
var interval
var indexQuestion = 0;
var secondsLeft = 75;


//Select the existing elements on the page
var startBtnEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var containerEl = document.querySelector("#container");
var mainEl = document.querySelector("main");

//Store user score and initials
var store;

if(localStorage.getItem("user")) {
    store = JSON.parse(localStorage.getItem('user'));
} else {
    store = [];
}






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
            //If you run out of time you are taken to the end screen
            if (secondsLeft <= 0) {
                clearInterval(interval);
                quizEnd()
                timerEl.textContent = "Time's up!";
            };
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
            //right answer add plus 1 to current score
            currentScore++

        } else {
            //wrong answer -15 seconds from secondsLeft
            wrongAnswer()

        }

        //once the questions are done you are presented with an end screen
        if (indexQuestion === questions.length) {
            quizEnd()

            //check if indexQuestion is === length of the question array
            //if so end game gameEnd()

        }
        else {
            askQuestion()

        }
    })
};

//time penalty
function wrongAnswer() {
    secondsLeft -= 15;
}

//quiz end screen 
function quizEnd() {
    mainEl.innerHTML = "";
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    //Display All Done! when quiz is over
    createH1.textContent = "All Done!"
    mainEl.appendChild(createH1);
    if (secondsLeft >= 0) {
        var createH2 = document.createElement("h2");
        createH2.setAttribute("id", "createH2");
        createH2.textContent = "Your final score is: " + currentScore;
        clearInterval(interval);
        mainEl.appendChild(createH2);
    }
    //Text for user to enter their initials 
    var userH4 = document.createElement("h4");
    userH4.textContent = "Enter your initials: ";
    mainEl.appendChild(userH4);
    
    //Box to add initials
    var userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    mainEl.appendChild(userInput);
    //Submit button
    var submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.setAttribute("class", "submitScore")
    mainEl.appendChild(submitBtn);
    
    submitBtn.addEventListener("click", storeScore);
     

    function storeScore() {
        var userInitials = document.querySelector("input").value;  
        store.push({[userInitials]: currentScore});
        localStorage.setItem('user',JSON.stringify(store));

} };

// function highScore() {
//     mainEl.innerHTML= "";
//     var createH3 = documnet.createElement("h3");
//     createH3.setAttribute("id", "createH3");
//     mainEl.appendChild(createH3);
//     var createScoreList = document.createElement("li");
//     createScoreList.textContent = store[i];
//     mainEl.appendChild(createScoreList);
// }

//Reload the webpage
reload.addEventListener("click", function () {
    onclick=window.location.reload(); 
})

//Clear the previous quiz scores
clearlocalstorage.addEventListener("click", function(){
    localStorage.clear();
})

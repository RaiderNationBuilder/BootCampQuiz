var bodyEl = document.querySelector('#main')
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var h1El = document.getElementById('main-h1');

var newH1 = document.createElement('h1');
var newDiv = document.createElement('div');
var pEl = document.createElement('p');
var startBtn = document.createElement('button', 'Start Quiz');
var h1Content = 'Coding Quiz Challenge';
var count = 0;
var timeLeft = 60;

var questions = ["String values must be enclosed within __________ when being assigned to variables.", "Arrays in JavaScript can be used to store __________?", "The condition in an if / else statement is enclosed with __________?",
"Commonly used data types DO Not Include:", "A very useful tool used during development and debugging for printing content to the debugger is:", "All Done!","High Scores"]

var q1Answers = ['1. commas', '2. curly brackets', '3. quotes', '4. paraenthesis', 2];
var q2Answers = ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above', 4];
var q3Answers = [];
var q4Answers = [];
var q5Answers = [];
var button1
var button2
var button3
var button4
var count = 0;

var screenWipe = function() {
  console.log("wipe call");
  while (bodyEl.firstChild) {    
    console.log(bodyEl.firstChild); 
    bodyEl.removeChild(bodyEl.firstChild);    
  };
};

var newH1ElAppend = function() {
  bodyEl.appendChild(newH1);
  newH1.setAttribute('class', 'h1-questions')
  newH1.textContent = "String values must be enclosed within __________ when being assigned to variables.";
};

var newDivAppend = function() {
  bodyEl.appendChild(newDiv).setAttribute('class', 'btn-div');  
};

var addButtons = function() {
  for (var i = 0; i < 4; i++) {    
    var answerBtn = document.createElement('button');
    // var btnId = "btn-" + (i + 1);
    var btnId = "btn-" + (i + 1);
    var answers
    newDiv.appendChild(answerBtn)
    switch (count) {
      case 0:
        answers = q1Answers;
        break;
      case 0:
        answers = q2Answers;
        break;
    }
    answerBtn.textContent = answers[i];
    answerBtn.setAttribute('class', 'btn-quiz');
    answerBtn.setAttribute('id', btnId);
  } 
};

var resultDivAppend = function() {
  divResult = document.createElement('div');
  var mainDiv = document.getElementById('main');
  mainDiv.appendChild(divResult);
  divResult.setAttribute('class', 'result');
};

var resultH1Append = function() {
  var responseH1 = document.createElement('h1');  
  resultH1 = divResult.appendChild(responseH1);
  resultH1.setAttribute('id' , 'result-h1');
};

var incorrect = function(count) {
  resultH1.textContent = "Wrong!"; 
  
  return true;
}

var correct = function(count) {
  resultH1.textContent = "Correct!"; 
  
  return true;
}

var checkAnswer1 = function(answer) { 
  var isAnswered = false;
  button1 = document.getElementById("btn-1");
  button2 = document.getElementById("btn-2");
  button3 = document.getElementById("btn-3");
  button4 = document.getElementById("btn-4");

  while (!isAnswered) {
    isAnswered = button1.onclick = incorrect;
    isAnswered = button2.onclick = correct;
    isAnswered = button3.onclick = incorrect;
    isAnswered = button4.onclick = incorrect;
  };

  return true;
};
 
var firstQuestion = function() {
  console.log("firstQuestion call");
  var questionAnswered = false
  // countdown();
  screenWipe(); 
  
  newH1ElAppend(); 
  newDivAppend();  
  addButtons();
  resultDivAppend();
  resultH1Append();

  while (!questionAnswered) {
    questionAnswered = checkAnswer1();
    if (questionAnswered) {
      return 2;
    };
  };
};

var checkAnswer2 = function(answer) { 
  
  
  
  button1 = document.getElementById("btn-1");
  button2 = document.getElementById("btn-2");
  button3 = document.getElementById("btn-3");
  button4 = document.getElementById("btn-4");

  button1.onclick = incorrect;
  button2.onclick = correct;
  button3.onclick = incorrect;
  button4.onclick = incorrect;
};

var secondQuestion = function() {
  console.log("secondQuestion call");
  
  // countdown();
  screenWipe(); 
  
  newH1ElAppend(); 
  newDivAppend();  
  addButtons();
  resultDivAppend();
  resultH1Append();

  // checkAnswer1();

  
};

function countdown() {    
        console.log("countdown call");
    // quiz();
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 0
      if (timeLeft > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Time: ' + timeLeft;       
        // Decrement `timeLeft` by 1
        timeLeft--;      
      } else {
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        alert("This Quiz Has Concluded!");
      }
    }, 1000);
  }

var onLoad = function () {
  console.log("onLoad call");
    timerEl.textContent = 'Time: 0';
    h1El.setAttribute('class', 'h1-onload')
    h1El.textContent = h1Content;
    mainEl.appendChild(pEl);
    pEl.setAttribute('class', 'p-onload');
    pEl.setAttribute('id', 'p-onload');
    pEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    mainEl.appendChild(startBtn);  
    startBtn.textContent = 'Start Quiz';
    startBtn.setAttribute('id', 'start');
    startBtn.setAttribute('class', 'btn-start');
    refresh = false;
}
var refresh = true;
if (refresh) {
    onLoad();
}

var questionHub = function() {
  console.log(count);
  while (count < 6) {
    if (count == 0) {
      count = firstQuestion();
    } if (count == 1) {
      secondQuestion();
    }
  }
}

startBtn.onclick = questionHub;
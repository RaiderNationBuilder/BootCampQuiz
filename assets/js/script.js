var bodyEl = document.querySelector('#main')
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var h1El = document.getElementById('main-h1');


var pEl = document.createElement('p');
var startBtn = document.createElement('button', 'Start Quiz');
var h1Content = 'Coding Quiz Challenge';

var timeLeft = 60;

var questions = ["String values must be enclosed within __________ when being assigned to variables.", "Arrays in JavaScript can be used to store __________?", "The condition in an if / else statement is enclosed with __________?",
"Commonly used data types DO Not Include:", "A very useful tool used during development and debugging for printint content to the debugger is:"]
var possibleAnswers = {
    q0: ['1. commas', '2. curly brackets', '3. quotes', '4. paraenthesis', 3],
    q1: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above', 4]
}


var screenWipe = function () {
    var getChild = document.getElementById('main').lastChild.nodeName;
    while (getChild != 'H1'){
        var childEl = document.getElementById('main').lastChild;    
        childEl.remove();
        var getChild = document.getElementById('main').lastChild.nodeName;
    }
    
}

var quiz = function() {
    screenWipe();
    var count = 0;
        
        h1El.textContent = questions[count];
        h1El.setAttribute('class', 'h1-questions')  
        
        for (var i = 0; i < 4; i++) {
            var qAnswer = 'q' + count;
            var objAns = possibleAnswers[qAnswer]
            var answerBtn = document.createElement('button', possibleAnswers[qAnswer])
            // console.log(qAnswer);
            // console.log(answerBtn);
            mainEl.appendChild(answerBtn)
            answerBtn.textContent = objAns[i];
            answerBtn.setAttribute('class', 'btn-quiz')
        }          
}

function countdown() {    
    console.log("countdown");
    
    quiz();
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        console.log("set interval");
      // As long as the `timeLeft` is greater than 0
      if (timeLeft > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Time: ' + timeLeft;       
        // Decrement `timeLeft` by 1
        console.log(timeLeft)
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
startBtn.onclick = countdown;

 

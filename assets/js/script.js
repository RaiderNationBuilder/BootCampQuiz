var bodyEl = document.querySelector('#main')
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var h1El = document.getElementById('main-h1');
var subtractTime = false;

var newH1 = document.createElement('h1');
var newDiv = document.createElement('div');
var pEl = document.createElement('p');
var startBtn = document.createElement('button', 'Start Quiz');
var h1Content = 'Coding Quiz Challenge';
var count = 0;
var timeLeft = 0;
var gameDone = false;
var playerScore = 0;

var questionsandanswers = [
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answer1: '1. commas',
        answer2: '2. curly brackets',
        answer3: '3. quotes',
        answer4: '4. paraenthesis',
        correctAnswer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store __________?",
        answer1: '1. numbers and strings',
        answer2: '2. other arrays',
        answer3: '3. booleans',
        answer4: '4. all of the above',
        correctAnswer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed with __________?",
        answer1: '1. quotes',
        answer2: '2. curly brackets',
        answer3: '3. parenthesis',
        answer4: '4. square brackets',
        correctAnswer: 2
    },
    {
        question: "Commonly used data types DO Not Include:",
        answer1: '1. strings',
        answer2: '2. booleans',
        answer3: '3. alets',
        answer4: '4. numbers',
        correctAnswer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: '1. JavaScript',
        answer2: '2. terminal/bash',
        answer3: '3. for loops',
        answer4: '4. console.log',
        correctAnswer: 3
    }
];

var screenWipe = function () {
    console.log("wipe call");
    if ($('#answers')) {
        $('#answers').empty();
    }
    $('#main').empty();    
}

var reduceClock = function() {
    console.log('in reduceClock');
    subtractTime = true;
    return subtractTime;
};

var gameOver = function() {
    screenWipe(); 
    var $endGame = $("<div><p class='p-onload'>Your final score is " + playerScore + ".</p></div><div class='score-pdiv'><p class='p-onload'>Enter Initials:</p><span class='span'><input type='text' value='Hello' class='input'></span><span class='span'><button class='btn-score' type='submit'>Submit</button></div>");
    
    this.timeLeft = 0;

    $('#main').attr('class', 'score-div')

    $(newH1).appendTo('#main')
            .attr('class', 'h1-questions')
            .html("All done!");

    $('#main').append($endGame)  
};

function checkClick(event) {
    screenWipe();   
    
    var selectedBtn = null;
    selectedBtn = event.target.id;    
    var numOfQuestions = questionsandanswers.length;
    
    // while (timeLeft > 0) {
        console.log(timeLeft);
        if (count >= numOfQuestions || gameDone) {
            gameOver();
            return 
        } else {
            if (selectedBtn != 'start' && count > 0) {  
                var countiterator = count -1;
                var correctAnswer = questionsandanswers[countiterator].correctAnswer;    
                console.log(selectedBtn);
                console.log(correctAnswer); 
                if (selectedBtn == correctAnswer) {
                    console.log("correct answer picked") 
                    $('#answers').append('<h1 class="result">Correct</h1>')           
                                                                            
                } else if (selectedBtn != correctAnswer) {
                    console.log("incorrect answer picked") 
                    $('#answers').append('<h1 class="result">Wrong</h1>') 
                    reduceClock();             
                };                       
            } else {
                countdown();
            };
        }; 
        //create and append <h1>
        $(newH1).appendTo('#main')
            .attr('class', 'h1-questions')
            .html(questionsandanswers[count].question);
        //create and append <div>    
        $(newDiv).appendTo('#main')
            .attr({'class': 'btn-div',
            'id': 'answers'}); 
        // use for loop to add button to page
        for (var i = 0; i < 4; i++) {
            console.log("inner for loop");
            //variables to build questionandanswer obj array iterator
            var answerIdx = 'answer' + (i + 1);
            var answerStr = "questionsandanswers[" + count + "]." + answerIdx;

            //variables to build four buttons
            var BtnIdx = 'answerBtn' + (i + 1);
            BtnIdx = $('<input type = "button"/>');

            //create button
            $(BtnIdx).appendTo($('#answers'));            
            $(BtnIdx).attr({'class': 'btn-quiz', 'id': i, 'value': eval(answerStr)});                  
        };

        count++     
        
        function countdown() {      
            
            // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
            var timeInterval = setInterval(function() {
                var minusTime = this.subtractTime;
                console.log(gameDone);
                if (minusTime) {
                    timeLeft -= 10;                
                    minusTime = false;
                };    
                // As long as the `timeLeft` is greater than 0
                if (timeLeft > 0 && !this.gameDone) {
                    console.log(gameDone);                  
                    // Set the `textContent` of `timerEl` to show the remaining seconds
                    timerEl.textContent = 'Time: ' + timeLeft;       
                    // Decrement `timeLeft` by 1                
                    timeLeft--;      
                } else {
                    timerEl.textContent = 'Time: 0';
                    // Use `clearInterval()` to stop the timer
                    clearInterval(timeInterval);
                    
                    // Call the `displayMessage()` function
                    alert("This Quiz Has Concluded!");
                    gameDone = true;
                    gameOver();
                    return
                }
                this.subtractTime = false;                          
            }, 1000);
            
        };
    // };

    
}; 
  
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

$('main').on("click", function(event) {
     checkClick(event)});
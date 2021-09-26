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
var subtractTime = false;

// var questions = ["String values must be enclosed within __________ when being assigned to variables.", "Arrays in JavaScript can be used to store __________?", "The condition in an if / else statement is enclosed with __________?",
// "Commonly used data types DO Not Include:", "A very useful tool used during development and debugging for printing content to the debugger is:", "All Done!","High Scores"]
// var possibleAnswers = {
//     q0: ['1. commas', '2. curly brackets', '3. quotes', '4. paraenthesis', 2],
//     q1: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above', 4]
// }
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
        correctAnswer: 4
    },
    {
        question: "The condition in an if / else statement is enclosed with __________?",
        answer1: '1. quotes',
        answer2: '2. curly brackets',
        answer3: '3. parenthesis',
        answer4: '4. square brackets',
        correctAnswer: 3
    },
    {
        question: "Commonly used data types DO Not Include:",
        answer1: '1. strings',
        answer2: '2. booleans',
        answer3: '3. alets',
        answer4: '4. numbers',
        correctAnswer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: '1. JavaScript',
        answer2: '2. terminal/bash',
        answer3: '3. for loops',
        answer4: '4. console.log',
        correctAnswer: 4
    }
];

var screenWipe = function () {
    console.log("wipe call");
    
    $('#main').empty();
}
// var addQueston = function() {

//     console.log("in addQuestion");

    // $(newH1).appendTo('#main')
    //     .attr('class', 'h1-questions')
    //     .text(questions[count]);
// };
// adding buttons to screen that contain the answers to the questions
// var addButtons = function() {
    // for (var n = 0; n < 6; n++) {
    //     $(newH1).appendTo('#main')
    //         .attr({'class': 'h1-questions','text': questionsandanswers[n]});

    //     $(newDiv).appendTo('#main')
    //         .attr({'class': 'btn-div',
    //         'id': 'answers'});
        
    //     console.log('in addButtons()')


    //     for (var i = 0; i < 4; i++) {
    //         console.log("inner for loop");
    //         var answerStr = 'answer' + i;
    //         // var objAns = possibleAnswers[qAnswer];
    //         var answerBtn = $('button').text(answerStr);
    //         $(answerBtn).attr({'class': 'btn-quiz', 'id': i });
            
    //     }; 
    // };
    // $('.btn-div').on("click", checkClick());
    //     function checkClick() {
    //         var selectedBtn = event.target.id;
    //         console.log(selectedBtn);
    //             if (selectedBtn == objAns[4]) {
    //                 console.log("correct answer picked") 
    //                 $('#answers').append('<h1 class="result">Correct</h1>')           
    //                 count++;                                                            
    //             };
    //     }; 
    // return objAns[4];

//     var correctAnswer = questionsandanswers[n].correctAnswer;
//     console.log(correctAnswer);
//     return correctAnswer;
// }

// var quiz = function() {
//     console.log('in quiz()');
//     // remove old elements from screen
//     screenWipe();
//     // create html elements that hold updated data
//     addButtons();    
    
    
    // add proper question and answer buttons to screen
    // addQueston();
     
    // var correctAnswer = addButtons();
    // console.log("correct answer " + correctAnswer);       
// }
var reduceclock = function() {
    subtractTime = true; 
    console.log(subtractTime);
    return subtractTime;    
}

function checkClick(event) {
    screenWipe();
    var selectedBtn = null;
    selectedBtn = event.target.id;   
    // var answerBtn1 = $('<input type = "button" value = "new button1"/>');
    // var answerBtn2 = $('<input type = "button" value = "new button2"/>');
    // var answerBtn3 = $('<input type = "button" value = "new button3"/>');
    // var answerBtn4 = $('<input type = "button" value = "new button4"/>');
           console.log(questionsandanswers[count].question);
        $(newH1).appendTo('#main')
            .attr('class', 'h1-questions')
            .html(questionsandanswers[count].question);
            
        $(newDiv).appendTo('#main')
            .attr({'class': 'btn-div',
            'id': 'answers'}); 
            
        // $(answerBtn1).appendTo($('#answers'));

        // $(answerBtn2).appendTo($('#answers'));

        // $(answerBtn3).appendTo($('#answers'));

        // $(answerBtn4).appendTo($('#answers'));
       
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
            // $(BtnIdx).html(answerStr);
            console.log(eval(answerStr));
                 
        }; 
        var correctAnswer = questionsandanswers[count].correctAnswer;
    
    
    console.log(selectedBtn);
    console.log(correctAnswer);
    if (selectedBtn != 'start') {
        if (selectedBtn == correctAnswer) {
            console.log("correct answer picked") 
            $('#answers').append('<h1 class="result">Correct</h1>')           
            count++;                                                           
        }else if (selectedBtn != correctAnswer) {
            console.log("incorrect answer picked") 
            $('#answers').append('<h1 class="result">Wrong</h1>') 
            reduceclock();          
            count++;  
        };          
    }   
    console.log(count);           
}; 
console.log(subtractTime);
function countdown(subtractTime) {    
    
    // quiz();
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function(subtractTime) {
        console.log(subtractTime); 
        // console.log("set interval");        
        // As long as the `timeLeft` is greater than 0
        if (timeLeft > 0) {
            if (subtractTime) {
                timeLeft = timeLeft - 10;
                subtractTime = false;
            }
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time: ' + timeLeft;       
            // Decrement `timeLeft` by 1
            // console.log(timeLeft)
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

$('main').on("click", function(event) {
     checkClick(event)});

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

function countdown() {
    var timeLeft = 5;
    console.log("started function");
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
  
  timerEl.textContent = 'Time: 0';

//   document.createElement("<h1>")

  startBtn.onclick = countdown;

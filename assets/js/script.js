

var startBtn = document.getElementById('body-button');
// creating a countdown timer to start on a button click and and end when it reaches zero
function countdown() {
    var timer = 30;

    var timeLeft = setInterval(function() {
        if (timer > 0) {
            timer --;
            console.log(timer);            
        } else {
            clearInterval(timeLeft);
            alert("The Quiz Has Concluded!");
            return;
        }
    }, 1000);
    
}

startBtn.onclick = countdown;





document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
}); //page loaded

let counter = 5;
let timeout;
let timer_on = 0;

function startCountdown() {
    startCount();
}

function timedCount() {
    document.getElementById("countdownNumber").innerHTML = counter;
    counter--;
    console.log("counter = " + counter);
    if (counter === 0) {
        stopCount();
    } else {
        timeout = setTimeout(timedCount, 1000);
    }
}

function startCount() {
    if (!timer_on) {
        timer_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(timeout);
    timer_on = 0;
}
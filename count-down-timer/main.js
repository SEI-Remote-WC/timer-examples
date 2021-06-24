let countdownEl = document.getElementById('countdown')
let timeLeft= 10;

let timer = setInterval(function() {
    countdownEl.textContent = timeLeft + ' seconds remaining.';
    timeLeft -= 1;
    if (timeLeft < 0) {
        countdownEl.textContent = 'Finished!'
    }

}, 1000)
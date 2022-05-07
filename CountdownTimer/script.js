// Create Countdown Timer//
const counter = document.getElementById("counter-down");
const countDown = setInterval(function () {
    if (counter.textContent > 0) {
        counter.textContent = counter.textContent - 1;
        if (counter.textContent < 10) {
            counter.textContent = "0" + counter.textContent;
        }
        if (counter.textContent == 0) {
            counter.textContent = 30;
        }
    } else {
        clearInterval(countDown);
    }
}, 1000);

const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
let state = 0;
next.addEventListener("click", () => {
    slides[state].style.display = "none";
    if (state >= slides.length - 1) {
        state = 0;
    } else {
        state += 1;
    }
    slides[state].style.display = "block";
});
previous.addEventListener("click", () => {
    slides[state].style.display = "none";
    if (state <= 0) {
        state = slides.length - 1;
    } else {
        state -= 1;
    }
    slides[state].style.display = "block";
});
setInterval(() => {
    slides[state].style.display = "none";
    if (state >= slides.length - 1) {
        state = 0;
    } else {
        state += 1;
    }
    slides[state].style.display = "block";
}, 5000);
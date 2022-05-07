// Simple Generate Random Password //
const numContent = "12345678901234567890123456",
    capContent = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    smContent = "zyxwvutsrqponmlkjihgfedcba",
    signContent = "!@#$%&*_-?!@#$%&*_-?@#$%&-",
    generateButton = document.getElementById("btn"),
    generatePassword = document.getElementById("generate-password"),
    passwordLength = 3;
generateButton.addEventListener("click", () => {
    generatePassword.textContent = "";
    generatePassword.style.visibility = "visible";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * numContent.length);
        generatePassword.textContent +=
            capContent.substring(randomNum, randomNum + 1) +
            numContent.substring(randomNum, randomNum + 1) +
            signContent.substring(randomNum, randomNum + 1) +
            smContent.substring(randomNum, randomNum + 1);
    }
});

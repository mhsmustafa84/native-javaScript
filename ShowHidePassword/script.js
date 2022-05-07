//Show Hide Password On Input Field//
const showHideButton = document.getElementById("btn"),
    passInput = document.getElementById("pass-input");
showHideButton.addEventListener("click", function () {
    if (this.textContent === "Show Password" && passInput.value !== "") {
        passInput.type = "text";
        this.textContent = "Hide Password";
    } else {
        passInput.type = "password";
        this.textContent = "Show Password";
    }
});
    
showHideButton.addEventListener("blur", function () {
    /* passInput.setAttribute('type', 'password'); */ //another code//
    passInput.type = "password";
    this.textContent = "Show Password";
});

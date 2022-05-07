// Live Typing //
const myContent = document.getElementById("content"),
    myContentLive = document.getElementById("content-live");
myContent.addEventListener("input", function () {
    myContentLive.textContent = this.value;
    myContentLive.style.visibility = "visible";
    if (myContentLive.textContent == "") {
        myContentLive.textContent = "spare";
        myContentLive.style.visibility = "hidden";
    }
});
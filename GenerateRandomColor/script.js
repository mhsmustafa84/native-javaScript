// Generate A Random Color //
const hexColor = "ABCDEF1234567890",
    genratorBtn = document.getElementById("genrator-btn"),
    colorCode = document.getElementById("color-code"),
    colorContnt = document.querySelector(".g-c"),
    copyColor = document.getElementById("copy-color");
genratorBtn.onclick = () => {
    let bGColor = "#";
    colorCode.textContent = "HEX Code: ";
    for (let i = 0; i < 6; i++) {
        const numRandom = Math.floor(Math.random() * hexColor.length);
        bGColor += hexColor.substring(numRandom, numRandom + 1);
        colorContnt.style.backgroundColor = bGColor;
    }
    colorCode.textContent += bGColor;
    colorCode.style.visibility = "visible";
    copyColor.style.visibility = "visible";
    copyColor.textContent = "Copy";
};
copyColor.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    const copiedColor = colorCode.textContent;
    textArea.value = copiedColor;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    copyColor.textContent = "Copied";
    setTimeout(function () {
        copyColor.style.visibility = "hidden";
    }, 1500);
});
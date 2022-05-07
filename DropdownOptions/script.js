// Create DropDown Options //

const createBtn = document.getElementById("create-option"),
    dropDown = document.getElementById("drop-down"),
    alertt = document.getElementById("alert"),
    startInput = document.getElementById("start"),
    endInput = document.getElementById("end");
createBtn.onclick = () => {
    if (
        !isNaN(parseInt(startInput.value)) &&
        !isNaN(parseInt(endInput.value))
    ) {
        dropDown.textContent = "";
        if ((startInput.value != "") & (endInput.value != "")) {
            for (let i = startInput.value - 1; i <= endInput.value; i++) {
                const createOption = document.createElement("option");
                createOption.textContent = i;
                dropDown.appendChild(createOption);
            }
            dropDown.style.visibility = "visible";
            alertt.style.visibility = "hidden";
            dropDown.firstElementChild.textContent = "Choose a year";
        }
    } else {
        dropDown.style.visibility = "hidden";
        alertt.style.visibility = "visible";
    }
};
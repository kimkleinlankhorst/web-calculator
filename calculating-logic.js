const btnNodeList = document.querySelectorAll("button");
const display = document.querySelector(".display");
let numA = "";
let operator = "";
let numB = "";
let firstNumComplete = false;

let opInput = "+-×÷"


for (let i = 0; i < btnNodeList.length; i++) {

    btnNodeList[i].onclick = () => {
        const pressedButton = btnNodeList[i].textContent;
        display.textContent += pressedButton;

        if (pressedButton === "=") {
            let total = calculate(numA, numB, operator);
            display.textContent = total;
            clearInputs(total);
        } else if (opInput.includes(pressedButton)) {
            firstNumComplete = true;
            operator = pressedButton;
        } else {
            // A number was clicked:
            if (!firstNumComplete) {
                numA += pressedButton;
            } else {
                numB += pressedButton
            }
        }


        console.log("numA = " + numA);
        console.log("numB = " + numB);
        console.log("op = " + operator);
    };
}

// Make the calculations
function calculate(a, b, op) {
    switch (op) {
        case "+":
            return Number(a) + Number(b);
        case "-":
            return Number(a) - Number(b);
        case "×":
            return Number(a) * Number(b);
        case "÷":
            return Number(a) / Number(b);
    }
}

// Clear the inputs after a calculation was done
function clearInputs(prevTotal) {
    numA = prevTotal;
    numB = "";
    operator = "";
}
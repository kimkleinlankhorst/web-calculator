const btnNodeList = document.querySelectorAll("button");
const display = document.querySelector(".display");
let numA = "";
let operator = "";
let numB = "";

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "÷": (a, b) => a / b,
};

// One eventListener instead of one on every button
document.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;
    const pressedButton = e.target.textContent;
    handleInput(pressedButton);
});

function handleInput(input) {
    if (input === "=") return handleEquals();
    if (isOperator(input)) return handleOperator(input);
    handleNumber(input);
}

function handleEquals() {
    let total = operate(numA, numB, operator);
    display.textContent = total;
    carryResults(total);
}

function isOperator(input) {
    return input in operations;
}

function handleOperator(input) {
    if (operator === "") {
        operator = input;
        updateDisplay();
    } else {
        let total = operate(numA, numB, operator);
        display.textContent = total;
        carryResults(total);
        operator = input;
        updateDisplay();
    }
}


function handleNumber(digit) {
    if (!operator) {
        numA += digit;
        updateDisplay();
    } else {
        numB += digit;
        updateDisplay();
    }
}

// Update complete display instead of appending and clearing it
function updateDisplay() {
    display.textContent = numA + operator + numB;
}

function operate(a, b, op) {
    const result = operations[op](Number(a), Number(b));
    return Math.round(result * 100) / 100
}

// Clear the inputs after a calculation was done
function carryResults(prevTotal) {
    numA = prevTotal;
    numB = "";
    operator = "";
}
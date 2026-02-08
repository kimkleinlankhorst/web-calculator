const calculatorDiv = document.querySelector(".calculator-container")

for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    calculatorDiv.appendChild(button);
}
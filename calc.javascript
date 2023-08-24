document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "0";
    let currentOperator = null;
    let previousInput = null;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function clear() {
        currentInput = "0";
        currentOperator = null;
        previousInput = null;
        updateDisplay();
    }

    function handleNumberClick(event) {
        const value = event.target.value;
        if (currentInput === "0") {
            currentInput = value;
        } else {
            currentInput += value;
        }
        updateDisplay();
    }

    function handleOperatorClick(event) {
        const value = event.target.value;
        if (currentOperator) {
            calculate();
        }
        currentOperator = value;
        previousInput = currentInput;
        currentInput = "0";
        updateDisplay();
    }

    function calculate() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (currentOperator) {
            case "+":
                currentInput = (num1 + num2).toString();
                break;
            case "-":
                currentInput = (num1 - num2).toString();
                break;
            case "*":
                currentInput = (num1 * num2).toString();
                break;
            case "/":
                currentInput = (num1 / num2).toString();
                break;
        }

        currentOperator = null;
        previousInput = null;
        updateDisplay();
    }

    function handleCalculateClick() {
        if (currentOperator && previousInput) {
            calculate();
        }
    }

    document.getElementById("clear").addEventListener("click", clear);
    document.getElementById("calculate").addEventListener("click", handleCalculateClick);

    const numberButtons = document.getElementsByClassName("number");
    for (const button of numberButtons) {
        button.addEventListener("click", handleNumberClick);
    }

    const operatorButtons = document.getElementsByClassName("operator");
    for (const button of operatorButtons) {
        button.addEventListener("click", handleOperatorClick);
    }
});

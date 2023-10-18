const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let currentOperator = '';
let result = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value >= '0' && value <= '9') {
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            clear();
        } else if (value === '=') {
            calculate();
        } else {
            currentOperator = value;
            currentInput += currentOperator;
            display.value = currentInput;
        }
    });
});

function clear() {
    currentInput = '';
    currentOperator = '';
    display.value = '';
}

function calculate() {
    const inputs = currentInput.split(currentOperator);
    const num1 = parseFloat(inputs[0]);
    const num2 = parseFloat(inputs[1]);

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            break;
    }

    display.value = result;
    currentInput = result.toString();
    currentOperator = '';
}


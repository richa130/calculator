const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number'); 
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');

let numOne = 0;
let currOperator = '';
let numTwo = 0;

numbers.forEach(number => number.addEventListener('click', event => {
    let currNum = document.createElement('span');
    currNum.textContent = event.target.textContent;

    updateDisplay(currNum);
}));

operators.forEach(operator => operator.addEventListener('click', event => {
    numOne = +display.textContent;
    currOperator = event.target.textContent;

    resetDisplay();
}));

equals.addEventListener('click', event => {
    numTwo = +display.textContent;
    let result = document.createElement('span');
    result.textContent = operate(currOperator, numOne, numTwo);

    resetDisplay();
    updateDisplay(result);
    
    numOne = 0; numTwo = 0; currOperator = '';
});

/****************************** backend functions ******************************/ 

function updateDisplay(currNum) {
    display.appendChild(currNum);
}

function resetDisplay() {
    let displaySpans = document.querySelectorAll('.display span');
    displaySpans.forEach(currSpan => display.removeChild(currSpan));
}


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    switch(operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

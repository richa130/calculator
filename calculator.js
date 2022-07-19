const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number'); 
const operators = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('.buttons');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let numOne = 0;
let currOperator = '';
let numTwo = 0;

numbers.forEach(number => number.addEventListener('click', event => updateDisplay(event.target.textContent)));

operators.forEach(operator => operator.addEventListener('click', event => {
    numOne = +display.textContent;
    currOperator = event.target.textContent;

    resetDisplay();
}));

equal.addEventListener('click', event => {
    numTwo = +display.textContent;

    resetDisplay();
    updateDisplay(operate(currOperator, numOne, numTwo));
    
    numOne = 0; numTwo = 0; currOperator = '';
});

clear.addEventListener('click', event => {
    resetDisplay();
    numOne = 0; numTwo = 0; currOperator = '';
});

buttons.forEach(button => button.addEventListener('click', clickButton ));

/****************************************************** backend functions ******************************************************/ 

function updateDisplay(value) {
    let currDisplay = document.createElement('span');
    currDisplay.textContent = value;

    display.appendChild(currDisplay);
}

function resetDisplay() {
    let displaySpans = document.querySelectorAll('.display span');
    displaySpans.forEach(currSpan => display.removeChild(currSpan));
}

function clickButton(event) {
    let buttonStyle = event.target.style;

    buttonStyle.color = 'white';
    buttonStyle.borderTop = '2px solid black';
    buttonStyle.borderLeft = '2px solid black';
    buttonStyle.borderBottom = '2px solid white';
    buttonStyle.borderRight = '2px solid white';
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
        case 'x':
            return multiply(x, y);
        case '/':
            if(y == 0) {
                return 'Division by 0 :(';
            }
            return divide(x, y);
    }
}

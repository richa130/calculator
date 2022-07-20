const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number'); 
const operators = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('.buttons button');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let numOne = 0;
let currOperator = '';
let numTwo = 0;
let currResult = 0;

numbers.forEach(number => number.addEventListener('click', event => {
    // if(numOne && !numTwo) {
    //     resetDisplay();
    // }

    updateDisplay(event.target.textContent)
}));

operators.forEach(operator => operator.addEventListener('click', event => {
    if(numOne && display.textContent) {
        //console.log('display: ' + display.textContent);
        numTwo = +display.textContent;
        let result = operate(currOperator, numOne, numTwo);
        console.log(`numOne: ${numOne}, currOperator: ${currOperator}, numTwo: ${numTwo}, result: ${result}`);

        resetDisplay();
        updateDisplay(result);

        numOne = result; currOperator = event.target.textContent; numTwo = 0;
        console.log(`numOne: ${numOne}, currOperator: ${currOperator}, numTwo: ${numTwo}`);
    }
    else {
        numOne = +display.textContent;
        currOperator = event.target.textContent;
        console.log(`numOne: ${numOne}, currOperator: ${currOperator}, numTwo: ${numTwo}`);

        resetDisplay();
    }
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

// for the button 'animation'
buttons.forEach(button => button.addEventListener('mousedown', clickButton));
buttons.forEach(button => button.addEventListener('mouseup', unclickButton));

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

function unclickButton(event) {
    let buttonStyle = event.target.style;

    buttonStyle.color = 'black';
    buttonStyle.borderTop = '2px solid white';
    buttonStyle.borderLeft = '2px solid white';
    buttonStyle.borderBottom = '2px solid black';
    buttonStyle.borderRight = '2px solid black';   
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

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number'); 
const operators = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('.buttons div');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const back = document.querySelector('.back');

let numOne = 0;
let currOperator = '';
let numTwo = 0;
let operationPerformed = false;

numbers.forEach(number => number.addEventListener('click', event => {
    if(operationPerformed) {
        resetDisplay();
        operationPerformed = false;
    }

    updateDisplay(event.target.textContent);
}));

operators.forEach(operator => operator.addEventListener('click', event => {
    if(numOne && !numTwo && display.textContent && !operationPerformed) {
        numTwo = +display.textContent;
        let result = operate(currOperator, numOne, numTwo);

        resetDisplay();
        updateDisplay(result);

        numOne = result; numTwo = 0; currOperator = event.target.textContent; operationPerformed = true; 
    }
    else {
        numOne = +display.textContent;
        currOperator = event.target.textContent;

        resetDisplay();
    }
    
}));

equal.addEventListener('click', event => {
    if(numOne && currOperator && display.textContent) {
        numTwo = +display.textContent;

        resetDisplay();
        updateDisplay(operate(currOperator, numOne, numTwo));
        
        numOne = 0; numTwo = 0; currOperator = ''; operationPerformed = true; 
    }
});

clear.addEventListener('click', event => {
    resetDisplay();
    numOne = 0; numTwo = 0; currOperator = ''; operationPerformed = false;
});

decimal.addEventListener('click', event => {
    if(!display.textContent.includes('.')) {
        updateDisplay(event.target.textContent);
    }
});

back.addEventListener('click', event => {
    const lastChild = display.lastElementChild;
    if(lastChild) {
        display.removeChild(lastChild);
    }
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
        default:
            if(y == 0) {
                return 'Can\'t / by 0';
            }
            let res = divide(x, y);
            if(res % 1 != 0) {
                return res.toFixed(5);
            }
            return res;
    }
}

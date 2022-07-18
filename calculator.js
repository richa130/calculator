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
        default:
            return 'operation not supported';    
    }
}

console.log(operate('+', 2, 3));
console.log(operate('+', 777, 90));
console.log(operate('-', 2, 3));
console.log(operate('-', 100, 50));
console.log(operate('*', 2, 3));
console.log(operate('/', 2, 3));
console.log(operate('/', 10, 2));
console.log(operate('/', 10, 3));

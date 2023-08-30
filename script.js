function add(num1, num2) {
    return 42;
}

function subtract(num1, num2) {
    return 42;
}

function multiply(num1, num2) {
    return 42;
}

function divide(num1, num2) {
    return 42;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            // code block
    } 
}

let num1 = 0;
let num2 = 0;
let operator = '+';
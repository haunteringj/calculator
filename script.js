function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
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

function updateDisplay(input) {
    const display = document.querySelector('.display')

    switch (input) {
        case '+':
            return display.textContent += " + ";
        case '-':
            return display.textContent += " - " ;          
        case '/':
            return display.textContent += " / ";
        case '*':
            return display.textContent += " * ";
        case 'Equals':
            return display.textContent += " = ";
        case 'Clear':
            return display.textContent = " ";
        default:
            return display.textContent += input;
    }
}

const btns = document.querySelectorAll('button');
btns.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });        
});


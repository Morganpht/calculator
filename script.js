/* Basic maths functions. */

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

/* Return correct operation based on operator selected. */

function operate (operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        
        case '−':
            return subtract(a, b);

        case '×':
            return multiply(a, b);

        case '÷':
            return divide(a, b);
        
    }
};

let number1;
let operator;
let number2;
let newNumber;
let decimalExists;


/* Displaying numbers chosen on screen. */

const screen = document.querySelector("#screen");
screen.textContent = "";


const numberButtons = document.querySelectorAll(".numbers");

function updateDisplay(value){
    return screen.textContent = value;
};

for (const button of numberButtons) {
    button.addEventListener('click', () => {
        if (newNumber) {
            updateDisplay("");
            newNumber = false;
            decimalExists = false;
        }
        
        console.log(number1, operator, number2);
        updateDisplay(screen.textContent + button.textContent.trim());
   });
};

const decimalButton = document.querySelector("#decimal");
    decimalButton.addEventListener('click', ()=> {
        if(decimalExists){
            return;
        } else {
            if (newNumber) {
                updateDisplay("");
                newNumber = false;
                decimalExists = false;
            }
            let entry = screen.textContent + decimalButton.textContent.trim();
            console.log(entry);
            decimalExists = true;
            console.log(number1, operator, number2);
            return updateDisplay(entry);
            
        }
    });


/* Clear display using C button. */

const clearButton = document.querySelector("#clear")

function clearEntry () {
    updateDisplay("");
    number1 = null; number2 = null; operator = null;
    console.log(number1, operator, number2);
    };

clearButton.addEventListener('click', clearEntry);


/* Operator button functionality. */

const functionButtons = document.querySelectorAll(".operator");

for (const button of functionButtons) {
    button.addEventListener('click', () => {
        
        newNumber = true;
        decimalExists = false;

        if (number1) {
            number2 = parseFloat(screen.textContent);
            console.log(number1, operator, number2);
            if (checkZeroDivide(operator, number2)) {
                clearEntry();
                updateDisplay("A black hole...");
            } else {
                let result = operate(operator, number1, number2);
                updateDisplay(result);
                number1 = result
                operator = button.textContent.trim();
                console.log(number1, operator, number2);
            }
            
        } else {
            number1 = parseFloat(screen.textContent);
            operator = button.textContent.trim();
            console.log(number1, operator, number2);
        }
        
    });
}

/* Equals button functionality */

const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener('click', () => {
    newNumber = true; 
    decimalExists = false;
    if (!operator) {
        return console.log(number1, operator, number2);
    } else {
        number2 = parseFloat(screen.textContent);
        console.log(number1, operator, number2);
        if (checkZeroDivide(operator, number2)) {
            clearEntry();
            updateDisplay("A black hole...");
        } else {
            let result = operate(operator, number1, number2);
            updateDisplay(result); 
            number1 = null;
            number2 = null;
            operator = null;
            console.log(number1, operator, number2);
        }
        
    }
});

function checkZeroDivide (operator, number2) {
    if (operator === "÷" && number2 === 0) {
        return true;
    } else {
        false;
    }
}
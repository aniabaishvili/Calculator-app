// const inputNumber = document.getElementById("number");
// const resetButton = document.querySelector(".reset");
// const numberButtons = Array.from(document.querySelectorAll('.button.number'));
// const operatorButtons = Array.from(document.querySelectorAll('.button.operator'));
// const rangeInput = document.getElementById("range");
// const deleteButton = document.querySelector('.delete.button');
// const equalButton = document.querySelector('.equal.sign.operator');
// const body = document.body;
// const numberResult = document.querySelector(".number-result");
// let resultOfNumber = "";

// resetButton.addEventListener("click",() => {
//     inputNumber.value = ' ';
// });

// numberButtons.forEach((button) => {
//     button.addEventListener("click",(event) => {
//         inputNumber.value += event.target.value;
// });
// });

// equalButton.addEventListener("click",() => {
//     const expression = inputNumber.value;

//     try {
//         // Step 2: Use eval to Evaluate the Expression
//         const result = eval(expression);

//         // Step 3: Update the Input Field
//         inputNumber.value = result;
//     } catch (error) {
//         // Handle any errors (e.g., division by zero, invalid expression)
//         inputNumber.value = 'Error';
//     }
// });

// deleteButton.addEventListener("click",() => {
//     let currentValue = inputNumber.value;
//     currentValue = currentValue.slice(0, -1);
//     inputNumber.value = currentValue;
// });


// const inputNumber = document.getElementById("number");
// const resetButton = document.querySelector(".reset");
// const numberButtons = document.querySelectorAll('.button.number');
// const operatorButtons = document.querySelectorAll('.button.operator');
// const deleteButton = document.querySelector('.delete.button');
// const equalButton = document.querySelector('.equal.sign.operator');
// const numberResult = document.querySelector(".number-result");
// const rangeInput = document.getElementById("range");
// let resultOfNumber = "";
const inputNumber = document.getElementById("number");
const resetButton = document.querySelector(".reset");
const numberButtons = Array.from(document.querySelectorAll('.button.number'));
const operatorButtons = Array.from(document.querySelectorAll('.button.operator'));
const rangeInput = document.getElementById("range");
const deleteButton = document.querySelector('.delete.button');
const equalButton = document.querySelector('.equal.sign.operator');
const body = document.body;
const numberResult = document.querySelector(".number-result");
let resultOfNumber = "";

resetButton.addEventListener("click", () => {
    inputNumber.value = '';
    resultOfNumber = '';
});

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        inputNumber.value += event.target.value;
        resultOfNumber += event.target.value;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        inputNumber.value += event.target.value;
        resultOfNumber += ' ' + event.target.value + ' ';
    });
});

equalButton.addEventListener("click", () => {
    try {
        const result = eval(resultOfNumber);
        inputNumber.value = result;
        resultOfNumber = result.toString();
    } catch (error) {
        inputNumber.value = 'Error';
    }
});

deleteButton.addEventListener("click", () => {
    let currentValue = inputNumber.value;
    currentValue = currentValue.slice(0, -1);
    inputNumber.value = currentValue;

    // Update resultOfNumber accordingly
    resultOfNumber = currentValue.trim();
});

rangeInput.addEventListener("click", (event) => {
    if (event.target.value === "1") {
        body.classList.remove("theme-3");
        body.classList.remove("theme-2");    
    }
    if (event.target.value === "2") {
        body.classList.remove("theme-3");
        body.classList.add("theme-2");
    } 
    if (event.target.value === "3") {
        body.classList.remove("theme-2");    
        body.classList.add("theme-3");
    }

});
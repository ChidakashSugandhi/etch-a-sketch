let  currentOperator = "";
let currentNumber = "";
let numberArray = [];


const calculate = (function () {
    const add = (a,b) => a+b;
    const sub = (a,b) => a-b;
    const mul = (a,b) => a*b;
    const div = (a,b) => a/b;
    return {add, sub, mul, div}
})();

const operate = function() {
    [a, b] = numberArray;
    switch (currentOperator) {
        case "+":
            return calculate.add(a,b);
            break;
        case "-":
            return calculate.sub(a,b);
            break;
        case "*":
            return calculate.mul(a,b);
            break;
        case "/":
            return calculate.div(a,b);
            break;
    }
}

const clearTempVariables = function() {
    currentNumber = "";
    currentOperator = "";
}

// ... is called spread operator, here it converts the nodelist into an array.
const numbers = [...document.querySelectorAll('.numbers')] 
numbers.map(number => { number.addEventListener('click', () => {
        currentNumber = currentNumber.concat(number.innerText);
        console.log(currentNumber);
    });
});

const operators = [...document.querySelectorAll('.operators')]
operators.map(operator => { operator.addEventListener('click', () => {
        numberArray[1] = (+currentNumber);
        currentOperator = operator.innerText;
        console.log(currentOperator);   
        currentNumber = "";
    });
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    numberArray.push(+currentNumber);
    console.log(numberArray);
    numberArray[0] = operate();
    numberArray.pop();
    console.log(numberArray);
    clearTempVariables();
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    clearTempVariables();
    numberArray = [];
})
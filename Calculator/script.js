const currentCalculation = [];
let  currentOperator = "";
const output = document.querySelector(".keypadContainer")



document.querySelectorAll(".number").forEach((number) => { 
    number.addEventListener("click", () =>{            
            console.log(number.innerText);
            if (currentCalculation.length <=1){
                currentCalculation.push(+number.innerText);
            }
            // console.log(currentCalculation);
        });
});

document.querySelectorAll(".operator").forEach((operator) => {
        operator.addEventListener("click", () => {
            console.log(operator.innerText);
            currentOperator = operator.innerText;
        });
});

document.querySelector(".equals").addEventListener("click", () => {
    console.log(`${currentCalculation[0]} ${currentOperator} ${currentCalculation[1]}`);
    output.textContent = operate();
});

document.querySelector(".clear").addEventListener("click", () => {
    currentCalculation.pop();
    currentCalculation.pop();
    currentOperator = "";
    output.textContent = "Enter a mathametical expression:";
    console.log(currentCalculation);
});


function add(a,b) {
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate() {
    if (currentCalculation.length == 2) {
        console.log(currentCalculation)
        switch (currentOperator) {
            case "+":
                currentCalculation[0] = (add(currentCalculation[0], currentCalculation[1]));
                currentCalculation.pop();
                break;
            case "-":
                currentCalculation[0] = (subtract(currentCalculation[0], currentCalculation[1]));
                currentCalculation.pop();
                break;
            case "*":
                currentCalculation[0] = (multiply(currentCalculation[0], currentCalculation[1]));
                currentCalculation.pop();
                break;
            case "/":
                currentCalculation[0] = (divide(currentCalculation[0], currentCalculation[1]));
                currentCalculation.pop();
                break;
        } 
        console.log(currentCalculation)
        return (currentCalculation[0]);
    }
}



// for (let i = 0; i<=9; i++) {
//     const button = document.querySelector(`.number${i}`);
//     button.addEventListener("click", () => {
        
//         if (currentCalculation.length <=1){
//             currentCalculation.push(+button.innerText);
//         }
//         console.log(currentCalculation)
    
//     });
// }

// document.querySelector(`.number${1}`).addEventListener("click", () => console.log("test"))


// document.querySelector(".add").addEventListener("click", (event) => {
//     currentOperator = "+";
// })




// document.querySelector(".sub").addEventListener("click", () => console.log("test"))
// document.querySelector(".multiply").addEventListener("click", () => console.log("test"))
// document.querySelector(".divide").addEventListener("click", () => console.log("test"))
// document.querySelector(".clear").addEventListener("click", () => console.log("test"))
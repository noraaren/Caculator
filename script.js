function add (a,b){
    return a+b; 
}

function subtract(a,b){
    return a - b;
}

function mutiply(a,b){
    return a*b; 
}

function divide(a,b){
    return a/b;
}


let firstNumber = 3; // Example number
let operator = "+"; // Example operator
let secondNumber = 5; // Example number
function operate(firstNumber, operator,secondNumber){
    if(operator == "+"){
        return add(firstNumber, secondNumber);
    } else if(operator == "-"){
        return subtract(firstNumber, secondNumber);
    } else if(operator == "*"){
        return mutiply(firstNumber, secondNumber);
    }else if(operator == "/"){
        return divide(firstNumber, secondNumber);
    }
}



const container = document.querySelector('#container');

const additionButton = document.createElement('button');
const subtractionButton = document.createElement('button');
const divisionButton = document.createElement('button');
const multiplicationButton = document.createElement('button');
const equalsButton = document.createElement('button'); 
const clearButton = document.createElement('button');
const dot = document.createElement('button');
const zero = document.createElement('button');
const one = document.createElement('button'); 
const two = document.createElement('button'); 
const three = document.createElement('button');
const four = document.createElement('button');
const five = document.createElement('button'); 
const six = document.createElement('button'); 
const seven = document.createElement('button'); 
const eight = document.createElement('button'); 
const nine = document.createElement('button'); 
const display = document.createElement('div');

// Corrected class assignments
additionButton.classList.add('operationButton');
subtractionButton.classList.add('operationButton');
divisionButton.classList.add('operationButton');
multiplicationButton.classList.add('operationButton');
clearButton.classList.add('bottomButton');
equalsButton.classList.add('bottomButton');
display.classList.add('display')

dot.classList.add('numberButton');
zero.classList.add('zeroButton');
one.classList.add('numberButton'); 
two.classList.add('numberButton'); 
three.classList.add('numberButton');
four.classList.add('numberButton');
five.classList.add('numberButton'); 
six.classList.add('numberButton');
seven.classList.add('numberButton');
eight.classList.add('numberButton');
nine.classList.add('numberButton'); 





// Optional: Append number buttons to the container if needed
row4.appendChild(dot);
row4.appendChild(zero);
row3.appendChild(one);
row3.appendChild(two);
row3.appendChild(three);
row2.appendChild(four);
row2.appendChild(five);
row2.appendChild(six);
row1.appendChild(seven);
row1.appendChild(eight);
row1.appendChild(nine);
displayRow.appendChild(display);

// Append buttons to the container
row4.appendChild(additionButton);
row3.appendChild(subtractionButton);
row2.appendChild(divisionButton);
row1.appendChild(multiplicationButton);
row5.appendChild(clearButton);
row5.appendChild(equalsButton);


multiplicationButton.textContent = '*'
divisionButton.textContent = '/'
subtractionButton.textContent = '-'
additionButton.textContent = '+'
dot.textContent = '.'
zero.textContent = '0'
one.textContent = '1'; 
two.textContent = '2'; 
three.textContent = '3';
four.textContent = '4';
five.textContent = '5';
six.textContent = '6';
seven.textContent = '7'; 
eight.textContent = '8'; 
nine.textContent = '9'; 
equalsButton.textContent = '=';
clearButton.textContent = "AC";




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


let firstNumber = 3; 
let operator = "+"; 
let secondNumber = 5; 

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



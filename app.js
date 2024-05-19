//Variables
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const pointBtn = document.querySelector("#point");
const equalBtn = document.querySelector('#equal');

const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

let currentOperation = document.querySelector('#current-operation');
let lastOperation = document.querySelector('#last-operation');


//Program
numberButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.preventDefault();
        if(currentOperation.textContent==0 || currentOperation.textContent == lastOperation.textContent){
            currentOperation.textContent = button.textContent;
        }
        else{
            currentOperation.textContent += button.textContent;
        }                
})}); 

operatorButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.preventDefault();
        if(firstOperand == ''){
            firstOperand = currentOperation.textContent;
            lastOperation.textContent = firstOperand;            
        }
        operator = button.textContent;
        currentOperation.textContent = 0;
})});

equalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(firstOperand != 0 && operator != ''){
        secondOperand = currentOperation.textContent;
        switch(operator){
            case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
            case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
            case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
            case '/':
                if(secondOperand==0){
                    currentOperation.textContent = 'Err: cannot divide by 0. Cl to continue.'
                    return;
                }
                else{
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                }
            break;
        }
        secondOperand = '';
        operator = '';
        firstOperand = result;
        lastOperation.textContent = result;
        currentOperation.textContent = lastOperation.textContent;
    }
});

deleteBtn.addEventListener('click', () => {
    if(currentOperation.textContent.length == 1){
        currentOperation.textContent = 0;
    }
    else{
        currentOperation.textContent = currentOperation.textContent.toString().slice(0, -1);
    }
});


clearBtn.addEventListener('click', () => {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    currentOperation.textContent = 0;
    lastOperation.textContent = '-';
});

pointBtn.addEventListener('click', () => {
    if(!currentOperation.textContent.includes('.')){
        currentOperation.textContent += '.';
    }
});
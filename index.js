const firstNumber = document.getElementById('firstnumber');
const secondNumber = document.getElementById('secondnumber');

const addition = document.getElementById('addition');
const substraction = document.getElementById('substraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');

const operationButton = document.getElementById('operationButton');


const operationResult = document.getElementById('operationResult');

function handleInput(event) {
    let inputValue = event.target.value;
    console.log('inputValue:', inputValue);

    if (isNaN(inputValue)) { 
    alert("In acest camp se pot introduce doar valori numerice.");
    }
}

firstNumber.addEventListener('input', handleInput);
secondNumber.addEventListener('input', handleInput);



addition.addEventListener('click', (number1, number2) => {
    
    addition.style.backgroundColor = 'salmon';
    substraction.style.backgroundColor = 'black';
    multiplication.style.backgroundColor = 'black';
    division.style.backgroundColor = 'black';
    let result = Number(firstNumber.value) + Number(secondNumber.value);
    operationResult.innerHTML = `<p>Rezultatul operației este ${result}.<p>`;
});


substraction.addEventListener('click', (number1, number2) => {
    
    substraction.style.backgroundColor = 'salmon';
    addition.style.backgroundColor = 'black';
    multiplication.style.backgroundColor = 'black';
    division.style.backgroundColor = 'black';
    let result = Number(firstNumber.value) - Number(secondNumber.value);
    operationResult.innerHTML = `<p>Rezultatul operației este ${result}.<p>`;
});

multiplication.addEventListener('click', (number1, number2) => {
   
    multiplication.style.backgroundColor = 'salmon';
    addition.style.backgroundColor = 'black';
    substraction.style.backgroundColor = 'black';
    division.style.backgroundColor = 'black';

    let result = Number(firstNumber.value) * Number(secondNumber.value);
    operationResult.innerHTML = `<p>Rezultatul operației este ${result}.<p>`;
});

division.addEventListener('click', (number1, number2) => {
   
    division.style.backgroundColor = 'salmon';
    addition.style.backgroundColor = 'black';
    substraction.style.backgroundColor = 'black';
    multiplication.style.backgroundColor = 'black';
   
    let result = Number(firstNumber.value) / Number(secondNumber.value);
    operationResult.innerHTML = `<p>Rezultatul operației este ${result}.<p>`;
});
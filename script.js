//function of each operation
function add(numberA, numberB) {
  return numberA + numberB;
}

function subtraction(numberA, numberB) {
  return numberA - numberB;
}

function multiplication(numberA, numberB) {
  return numberA * numberB;
}

function division(numberA, numberB) {
  if (numberB == 0) {
    return "ERROR Can't divide by zero";
  }
  return numberA / numberB;
}
function MOD(numberA, numberB) {
  return numberA % numberB;
}

//Operations
function operate(numberA, numberB, operation) {
  switch (operation) {
    case "addition":
      return add(numberA,numberB);
    case "subtraction":
      return subtraction(numberA,numberB);
    case "multiplication":
      return multiplication(numberA,numberB);
    case "division":
      return division(numberA,numberB);
    case "MOD":
      return MOD(numberA,numberB);
  }
}

//buttons and screens to display the numbers and calculations
const keyboard = document.querySelectorAll('.key');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
let numberA = 0;
let numberB = 0;
let currentOperation = "";

//Each button event
keyboard.forEach(key => {
  key.addEventListener('click', () => {
    switch (key.value) {
      case "number":
        screen1.textContent += key.getAttribute('id');
        break;
      case "operation":
        operationManager(key.getAttribute('id'));
        break;
      case "equal":
        equal();
        break;
      case "delete":
        Clear(key.getAttribute('id'));
        break;
      default:
        break;
    }
  })
})

// Check if an operation was already done
function operationManager(operation) {
  let result;
  if(screen2.textContent == ""){
    screen2.textContent = screen1.textContent
    numberA = +screen2.textContent
    currentOperation = operation
    screen1.textContent = ""
  }else{
    numberB = +screen1.textContent;
    result = operate(numberA,numberB,currentOperation)
    currentOperation = operation;
    screen2.textContent = checkPoint(result);
    screen1.textContent = ""
    numberA = result;
    numberB = 0;
  }
}

//check if theres 2 numbers in screens and realize the current select operation.
function equal() {
  let result;
  if (screen2.textContent != "" && currentOperation != "") {
    numberB = +screen1.textContent;
    result = operate(numberA,numberB,currentOperation)
    currentOperation = "";
    screen2.textContent = checkPoint(result);
    screen1.textContent = ""
    numberA = result;
    numberB = 0
  }
}

function checkPoint(number){
  let text = number.toString();
  if (text.includes('.')) {
    return number.toFixed(2);
  }
  return number;
}

function Clear(key){
  if (key == "CE") {
    screen1.textContent = ""
  }else{
    screen1.textContent = ""
    screen2.textContent = ""
    currentOperation = "";
    numberA = 0;
    numberB = 0;
  }
}
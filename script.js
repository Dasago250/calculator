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
  }
}

const keyboard = document.querySelectorAll('.key');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

let numberA = 0;
let numberB = 0;
let currentOperation = "";

keyboard.forEach(key => {
  key.addEventListener('click', () => {
    switch (key.value) {
      case "number":
        screen1.textContent += key.getAttribute('id');
        break;
      case "operation":
        operationManager(key.getAttribute('id'))
        break;
      case "equal":
        equal();
        break;
      default:
        break;
    }
  })
})

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
    screen2.textContent = result;
    screen1.textContent = ""
    currentOperation = operation;
    numberA = result;
    numberB = 0;
  }
}

function equal() {
  if (screen2.textContent != "" && currentOperation != "") {
    numberB = +screen1.textContent;
    result = operate(numberA,numberB,currentOperation)
    screen2.textContent = result;
    screen1.textContent = ""
    numberA = result;
    numberB = 0
  }
}
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
    case "add":
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

keyboard.forEach(key => {
  key.addEventListener('click', () => {
    switch (key.value) {
      case "number":
        screen1.textContent += key.getAttribute('id');
        break;
      default:
        break;
    }
  })
})
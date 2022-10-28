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
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b == 0) return 'Oops';
  return a / b;
}

function operate(operator, a, b) {
  return (operator == '+') ? addition(a,b) : (operator == '-') ? subtraction(a,b) : (operator == '*') ? multiplication(a,b) : (operator == '/') ? division(a,b) : '';
}

function triggerOp() {
  second = parseFloat(currentNum);
  currentDisplay = operate(currentOp,first,second);
  if (currentDisplay.length > 5) {
    currentDisplay = currentDisplay.substring(0,5)
  }
  first = currentDisplay;
  second = 0;
  currentNum = '';
}

function buttonPress(e) {
  console.log(e.target.attributes.class.value);
  console.log(this.innerHTML);
  if (e.target.attributes.class.value == 'number') {
    if (this.innerHTML == '.') {
      if (currentNum.includes('.')) {
        return
      }
    }
    currentNum += this.innerHTML;
    currentDisplay = currentNum;
  }

  if (e.target.attributes.class.value == 'operator') {
    if (currentOp == '') {
      first = parseFloat(currentNum);
      currentNum = '';
      currentOp = this.innerHTML;
    } else {
      if (this.innerHTML == '=') {
        if (currentOp == '') {
          return
        } else {
          triggerOp();
          currentOp = '';
        }
      } 
      if (currentNum == '') {
        currentOp = this.innerHTML;
      } else {
        triggerOp();
        currentOp = this.innerHTML;
      }
      // calculation += " " + currentOp + " ";
    }
  }
  
  if (e.target.attributes.class.value == 'clear') {
    currentNum = '';
    currentDisplay = '';
    first = 0;
    second = 0;
    currentOp = '';
  }

  display.innerHTML = (currentDisplay);
}

let currentNum = '';
let currentDisplay = '';
let first = 0;
let second = 0;
let currentOp = '';

const display = document.querySelector("#display");
const buttons = document.querySelectorAll('button');
buttons.forEach(item => item.addEventListener('click', buttonPress));
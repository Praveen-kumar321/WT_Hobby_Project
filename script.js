let currentInput = '';
let previousInput = '';
let operation = null;

function updateDisplay(value) {
  document.getElementById('display').textContent = value;
}

function appendNumber(num) {
  if (num === '.' && currentInput.includes('.')) return;
  currentInput += num;
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+': result = prev + current; break;
    case '-': result = prev - current; break;
    case '*': result = prev * current; break;
    case '/': result = current !== 0 ? prev / current : 'Error'; break;
    default: return;
  }
  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay('0');
}
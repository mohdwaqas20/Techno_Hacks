let currentCalculation = '';
const screen = document.getElementById('screen');

function appendToScreen(value) {
  currentCalculation += value;
  screen.textContent = currentCalculation;
}

function calculate() {
  try {
    currentCalculation = eval(currentCalculation).toString();
    screen.textContent = currentCalculation;
  } catch (error) {
    currentCalculation = '';
    screen.textContent = 'Error';
  }
}

function clearScreen() {
  currentCalculation = '';
  screen.textContent = '0';
}

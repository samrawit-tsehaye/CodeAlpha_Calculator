let display = document.getElementById('display');
function appendNumber(num) {
  display.value += num
}
function appendOperator(op) {
  display.value += op
}
function calculate() {
  try {
   display.value = 
   eval(display.value);
  } catch {
    display.value= 'Error';
  }
}
function clearDisplay() {
  display.value = '';
}
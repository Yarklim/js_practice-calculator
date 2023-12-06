function clearAll() {
  a = '';
  b = '';
  sign = '';
  result = 0;
  mainDisplay.textContent = 0;
  secondDisplay.textContent = '';
}

function doAdd(a, b) {
  return String(Number(a) + Number(b));
}

function doSubstract(a, b) {
  return String(a - b);
}

function doMultiplay(a, b) {
  return String(a * b);
}

function doDivide(a, b) {
  if (b === '0') return 'Error';
  return String(a / b);
}

function doPercent(a, b) {
  return String(a * (b / 100));
}

function addPercent(a, b) {
  return String(a + a * (b / 100));
}

function substractPercent(a, b) {
  return String(a - a * (b / 100));
}

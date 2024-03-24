export function doAddition(num1, num2) {
  return String(Number(num1) + Number(num2));
}

export function doSubstract(num1, num2) {
  return String(Number(num1) - Number(num2));
}

export function doMultiplay(num1, num2) {
  return String(Number(num1) * Number(num2));
}

export function doDivide(num1, num2) {
  if (num2 === '0') return 'Error';
  return String(Number(num1) / Number(num2));
}

export function doPercent(num1, num2) {
  return String(Number(num1) * (Number(num2) / 100));
}

export function addPercent(num1, num2) {
  return String(Number(num1) + Number(num1) * (Number(num2) / 100));
}

export function substractPercent(num1, num2) {
  return String(Number(num1) - Number(num1) * (Number(num2) / 100));
}

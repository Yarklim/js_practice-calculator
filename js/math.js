export function doAdd(a, b) {
  return String(Number(a) + Number(b));
}

export function doSubstract(a, b) {
  return String(a - b);
}

export function doMultiplay(a, b) {
  return String(a * b);
}

export function doDivide(a, b) {
  if (b === '0') return 'Error';
  return String(a / b);
}

export function doPercent(a, b) {
  return String(a * (b / 100));
}

export function addPercent(a, b) {
  return String(a + a * (b / 100));
}

export function substractPercent(a, b) {
  return String(a - a * (b / 100));
}

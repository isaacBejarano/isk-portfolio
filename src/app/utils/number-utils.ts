function checkNumberNonNegative(n: number): number {
  if (n < 0) throw new TypeError("Argument 'n' must be a positive number");
  return n; // {0,1,...}
}

function isNumberNatural(n: unknown): boolean {
  return isNumberPositive(n) && Number.isInteger(n); // {1,2,3...}
}

function isNumberPositive(n: unknown): boolean {
  return typeof n === 'number' && n > 0; // {1.1,2,2.6...}
}

export { checkNumberNonNegative, isNumberPositive, isNumberNatural };

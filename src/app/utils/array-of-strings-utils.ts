function arrayOfStringsTrimAll(array: string[]): string[] {
  // ['  text-black ','border']
  // -> '  text-black border'
  // -> ' text-black border'
  // -> ['','text-black','border']
  // -> ['text-black','border']
  return array
    .join(' ')
    .replaceAll(/\s/g, ' ')
    .split(' ')
    .filter((klass) => klass !== '');
}

export { arrayOfStringsTrimAll };

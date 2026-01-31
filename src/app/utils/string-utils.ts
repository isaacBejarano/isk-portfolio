function hash(str: string): string {
  return `#${str}`;
}

function dehash(str: string): string {
  return str.replace('#', '');
}

export { hash, dehash };

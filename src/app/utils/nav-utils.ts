function isOpenLink(site?: string): boolean {
  const name = site ? `'${site}' ` : '';
  return confirm(`This ${name}link will open in a new window`);
}

export { isOpenLink };

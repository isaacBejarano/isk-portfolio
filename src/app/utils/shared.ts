export class Shared {
  constructor() {}

  // static methods
  public static openLink(): boolean {
    return confirm('This link will open in a new window');
  }

  public static hashIt(str: string): string {
    return '#' + str;
  }

  public static capitalLetter(str: string): string {
    return str.substr(0, 1).toUpperCase() + str.substr(1, str.length);
  }
}

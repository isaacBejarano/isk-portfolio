import { Router } from '@angular/router';

export class Shared {
  constructor() {}

  // static methods
  public static openLink(): boolean {
    return confirm('This link will open in a new window');
  }

  public static hashIt(str: string): string {
    return '#' + str;
  }

  public static unHashIt(str: string): string {
    return str.substring(1);
  }

  public static capitalLetter(str: string): string {
    return str.substr(0, 1).toUpperCase() + str.substr(1, str.length);
  }

  public static pageToTop(): void {
    window.scrollTo(0, 0);
  }

  // to reroute on buttons and other alements different from <a>
  public static reroute(routerInstance: Router, route: string): void {
    routerInstance.navigate([route]);
  }
}

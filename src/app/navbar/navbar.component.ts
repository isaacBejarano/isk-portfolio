import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  homePic = 'portfolio/codhex-logo.png';
  homeAlt = 'codhex logo';
  hamburger = 'menu';
  home = 'home';
  page1 = 'featured';
  page2 = 'portfolio';
  page3 = 'about';
  page4 = 'contact';

  constructor() {}

  // methods
  hashIt(ref: string): string {
    return '#' + ref;
  }

  capitalLetter(str: string): string {
    let capitalized = str.substr(0, 1).toUpperCase();

    capitalized += str.substr(1, str.length);

    return capitalized;
  }
}

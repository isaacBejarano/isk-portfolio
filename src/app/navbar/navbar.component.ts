import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  hometitle = 'Home';
  homepic = 'portfolio/codhex-logo.png';
  homealt = 'codhex logo';
  hamburger = 'menu';
  page1 = 'featured';
  page2 = 'portfolio';
  page3 = 'about';
  page4 = 'contact';

  constructor() {}
}

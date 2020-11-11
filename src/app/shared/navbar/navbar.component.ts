import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // --> props
  home = store.navbar.home;
  src = store.navbar.src;
  alt = store.navbar.alt;
  hamburger = store.navbar.hamburger;
  page1 = store.navbar.page1;
  page2 = store.navbar.page2;
  page3 = store.navbar.page3;
  page4 = store.navbar.page4;
  // --> shared methods
  hashIt = Shared.hashIt;
  capitalLetter = Shared.capitalLetter;

  constructor() {}
}

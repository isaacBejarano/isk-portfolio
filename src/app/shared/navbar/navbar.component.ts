import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbar = store.getNavbar as object | any;

  // <- shared methods
  hashIt = Shared.hashIt;
  capitalLetter = Shared.capitalLetter;

  constructor() {}
}

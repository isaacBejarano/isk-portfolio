import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent {
  scroll = store.getScroll as object | any;
  navbar = store.getNavbar as object | any;

  // <- shared methods
  hashIt = Shared.hashIt;

  constructor() {}
}

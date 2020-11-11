import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {
  // --> props
  icon = store.scroll.icon;
  home = store.navbar.home;
  // --> shared methods
  hashIt = Shared.hashIt;

  constructor() {}
}

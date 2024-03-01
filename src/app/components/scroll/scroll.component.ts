import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent {
  scroll = store.getScroll;
  navbar = store.getNavbar;

  hashIt = Shared.hashIt;
}

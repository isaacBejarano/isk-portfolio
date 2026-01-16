import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  standalone: false,
})
export class ScrollComponent {
  scroll = store.getScroll;
  navbar = store.getNavbar;

  // faChevronUp = faChevronUp; FIXME:
  hashIt = Shared.hashIt;
}

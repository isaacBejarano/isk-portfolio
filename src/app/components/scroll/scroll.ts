import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-scroll',
  templateUrl: './scroll.html',
  styleUrls: ['./scroll.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scroll {
  scroll = store.getScroll;
  navbar = store.getNavbar;

  // faChevronUp = faChevronUp; FIXME:
  hashIt = Shared.hashIt;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollComponent {
  scroll = store.getScroll;
  navbar = store.getNavbar;

  // faChevronUp = faChevronUp; FIXME:
  hashIt = Shared.hashIt;
}

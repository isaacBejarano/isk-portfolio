import { Component } from '@angular/core';
import { store } from '../../../store/store';
import { Shared } from '../../../utils/shared';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  // props to Input()
  divider = 'divider-dark';

  // --> props
  title = store.featured.title;
  subtitle = store.featured.subtitle;
  id = store.featured.id;
  src = store.featured.src;
  alt = store.featured.alt;
  link = store.featured.link;
  linkText = store.featured.linkText;
  p1 = store.featured.p1;
  p2 = store.featured.p2;
  // common
  visitThis = store.portfolio.visitThis;
  star = store.portfolio.star;
  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}
}

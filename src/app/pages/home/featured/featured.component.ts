import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '../../../store/store';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  // props to Input()
  divider = 'divider-dark';

  // portfolio
  common = store.portfolio.common; // common
  modal8 = store.portfolio.modal8; // ~new
  // new
  new = store.new;

  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}
}

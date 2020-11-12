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

  portfolio = store.getPortfolio as object | any; // common + modal8
  new = store.getNew as object | any; // featured ~new

  // <- shared methods
  openLink = Shared.openLink;

  constructor() {}
}

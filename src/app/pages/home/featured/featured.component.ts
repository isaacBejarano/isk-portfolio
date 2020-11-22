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

  new = store.getNew as object | any; // featured ~new
  portfolioItems = store.getPortfolioItems as object | any; // common + modal8
  portfolioCommon = store.getPortfolioCommon as object | any; // common + modal8

  // <- shared methods
  openLink = Shared.openLink;

  constructor() {}
}

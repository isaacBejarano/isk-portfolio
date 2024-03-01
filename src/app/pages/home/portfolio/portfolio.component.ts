import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  // prop -> to <app-divider> Input()
  divider = 'divider-light';

  portfolioCommon = store.getPortfolioCommon;
  portfolioItems = store.getPortfolioItems;

  openLink = Shared.openLink;

  constructor() {}
}

import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '../../../store/store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  // prop -> to <app-divider> Input()
  divider = 'divider-light';

  portfolioCommon = store.getPortfolioCommon as object;
  portfolioItems = store.getPortfolioItems as object;

  openLink = Shared.openLink;

  constructor() {}
}

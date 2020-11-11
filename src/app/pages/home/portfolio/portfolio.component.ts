import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '../../../store/store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  // prop -> to <app-divider> Input()
  divider = 'divider-light';

  // portfolio
  portfolio = store.portfolio;

  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}
}

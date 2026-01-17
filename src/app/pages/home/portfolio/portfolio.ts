import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '@app/data/store';
import { Divider } from '@app/components/divider/divider';

@Component({
  selector: 'isk-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css'],
  imports: [Divider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  // prop -> to <isk-divider> Input()
  divider = 'divider-light';

  portfolioCommon = store.getPortfolioCommon;
  portfolioItems = store.getPortfolioItems;

  openLink = Shared.openLink;

  constructor() {}
}

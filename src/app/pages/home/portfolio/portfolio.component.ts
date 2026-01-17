import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '@app/data/store';
import { DividerComponent } from '@app/components/divider/divider.component';

@Component({
  selector: 'isk-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [DividerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  // prop -> to <isk-divider> Input()
  divider = 'divider-light';

  portfolioCommon = store.getPortfolioCommon;
  portfolioItems = store.getPortfolioItems;

  openLink = Shared.openLink;

  constructor() {}
}

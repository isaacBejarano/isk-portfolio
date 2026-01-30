import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Divider } from '@app/divider/divider';
import { ListReversePipe } from '@app/pipes/list-reverse-pipe';
import { isOpenLink } from '@app/utils/nav-utils';

@Component({
  selector: 'isk-portfolio',
  templateUrl: './portfolio.html',
  imports: [Divider, ListReversePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  // DUMMY
  readonly portfolio = input.required<StorePortfolio>();
  isOpenLink = isOpenLink;
}

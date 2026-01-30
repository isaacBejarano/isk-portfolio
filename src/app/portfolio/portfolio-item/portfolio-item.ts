import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'isk-portfolio-item',
  templateUrl: './portfolio-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioItem {
  // DUMMY
  item = input.required<StorePortfolioItemized>();
  css = input.required<string>();
}

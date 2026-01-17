import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DividerComponent } from '@app/components/divider/divider.component';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  imports: [DividerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  // props to Input()
  divider = 'divider-dark';
  @Input() new: string;

  portfolioItems = store.getPortfolioItems; // common + modal8
  portfolioCommon = store.getPortfolioCommon; // common + modal8

  // faPlus = faPlus; FIXME:
  // faTimes = faTimes; FIXME:
}

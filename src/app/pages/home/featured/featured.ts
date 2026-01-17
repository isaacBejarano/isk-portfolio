import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Divider } from '@app/components/divider/divider';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-featured',
  templateUrl: './featured.html',
  styleUrls: ['./featured.css'],
  imports: [Divider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Featured {
  // props to Input()
  divider = 'divider-dark';
  @Input() new: string;

  portfolioItems = store.getPortfolioItems; // common + modal8
  portfolioCommon = store.getPortfolioCommon; // common + modal8

  // faPlus = faPlus; FIXME:
  // faTimes = faTimes; FIXME:
}

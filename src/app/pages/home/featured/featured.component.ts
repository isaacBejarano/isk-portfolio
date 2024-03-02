import { Component, Input } from '@angular/core';
import { store } from '@app/data/store';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  // props to Input()
  divider = 'divider-dark';
  @Input() new: string;

  portfolioItems = store.getPortfolioItems; // common + modal8
  portfolioCommon = store.getPortfolioCommon; // common + modal8

  faPlus = faPlus;
  faTimes = faTimes;
}

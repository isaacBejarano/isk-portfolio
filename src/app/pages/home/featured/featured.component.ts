import { Component, Input } from '@angular/core';
import { store } from '../../../store/store';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  // props to Input()
  divider = 'divider-dark';
  @Input() new: string;

  portfolioItems = store.getPortfolioItems as object | any; // common + modal8
  portfolioCommon = store.getPortfolioCommon as object | any; // common + modal8

  constructor() {}
}

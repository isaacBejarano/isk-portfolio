import { Component } from '@angular/core';
import { store } from '../../../store/store';
import { Shared } from '../../../utils/shared';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  // prop -> to <app-divider> Input()
  divider = 'divider-light';

  // common
  common = {
    star: store.portfolio.common.star,
    stars: store.portfolio.common.stars,
    repo1: store.portfolio.common.repo1,
    repo2: store.portfolio.common.repo2,
    repo3: store.portfolio.common.repo3,
    list: store.portfolio.common.list,
    visit: store.portfolio.common.visit,
    visits: store.portfolio.common.visits,
    dontforget: store.portfolio.common.dontforget,
  };
  // modal 1
  modal1 = {
    component: {
      id: store.portfolio.modal1.target, // unHashIt()
      label: '',
      title: store.portfolio.modal1.title,
      src: store.portfolio.modal1.src,
      alt: store.portfolio.modal1.alt,
    },
    text: {
      p1: store.portfolio.modal1.p1,
      link1: store.portfolio.modal1.link1,
      link2: store.portfolio.modal1.link2,
    },
  };
  // modal 2
  modal2 = {
    component: {
      id: store.portfolio.modal2.target, // unHashIt()
      label: '',
      title: store.portfolio.modal2.title,
      src: store.portfolio.modal2.src,
      alt: store.portfolio.modal2.alt,
    },
    text: {
      p1: store.portfolio.modal2.p1,
      link1: store.portfolio.modal2.link1,
    },
  };

  // --> shared methods
  openLink = Shared.openLink;
  unHashIt = Shared.unHashIt; // '#portfolioModal1' -> 'portfolioModal1'

  constructor() {
    // 1. unHashIt() all
    this.modal1.component.id = this.unHashIt(this.modal1.component.id);
    this.modal2.component.id = this.unHashIt(this.modal2.component.id);
    // 2. concat string for area-labelledby
    this.modal1.component.label = this.modal1.component.id + 'Label';
    this.modal2.component.label = this.modal2.component.id + 'Label';
  }
}

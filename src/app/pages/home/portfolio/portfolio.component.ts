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

  // modals text common
  modalTextCommon = {
    star: store.portfolio.star,
    stars: store.portfolio.stars,
    repo1: store.portfolio.linkText,
    repo2: store.portfolio.linkText2,
    repo3: store.portfolio.linkText3,
    list: store.portfolio.visitList,
    visit: store.portfolio.visitThis,
    visits: store.portfolio.visitThese,
    dontforget: store.portfolio.dontforget,
  };

  // modal 1
  modal1 = {
    component: {
      id: 'portfolioModal1',
      ariaLabel: 'portfolioModal1Label',
      title: store.portfolio.title1,
      img: store.portfolio.img1,
      alt: store.portfolio.alt1,
    },
    text: {
      p1: store.portfolio.paragraphPart1,
      link1: store.portfolio.link1,
      link2: store.portfolio.linkPages,
    },
  };

  // modal 2
  modal2 = {
    component: {
      id: 'portfolioModal2',
      ariaLabel: 'portfolioModal2Label',
      title: store.portfolio.title2,
      img: store.portfolio.img2,
      alt: store.portfolio.alt2,
    },
    text: {
      p1: store.portfolio.paragraphPart2,
      link1: store.portfolio.link2,
    },
  };

  // --> props

  // imgage 1
  // paragraphPart1 = store.portfolio.paragraphPart1;
  // dontforget = store.portfolio.dontforget;
  // link1 = store.portfolio.link1;
  // linkPages = store.portfolio.linkPages;
  // imgage 2
  img2 = store.portfolio.img2;
  alt2 = store.portfolio.alt2;
  title2 = store.portfolio.title2;
  paragraphPart2 = store.portfolio.paragraphPart2;
  link2 = store.portfolio.link2;
  // imgage 3
  img3 = store.portfolio.img3;
  alt3 = store.portfolio.alt3;
  title3 = store.portfolio.title3;
  paragraphPart3 = store.portfolio.paragraphPart3;
  link3 = store.portfolio.link3;
  // imgage 4
  img4 = store.portfolio.img4;
  alt4 = store.portfolio.alt4;
  title4 = store.portfolio.title4;
  paragraphPart4 = store.portfolio.paragraphPart4;
  link4 = store.portfolio.link4;
  link4b = store.portfolio.link4b;
  // imgage 5
  img5 = store.portfolio.img5;
  alt5 = store.portfolio.alt5;
  title5 = store.portfolio.title5;
  paragraphPart5 = store.portfolio.paragraphPart5;
  link5 = store.portfolio.link5;
  // imgage 6
  img6 = store.portfolio.img6;
  alt6 = store.portfolio.alt6;
  title6 = store.portfolio.title6;
  link6a = store.portfolio.link6a;
  link6b = store.portfolio.link6b;
  link6c = store.portfolio.link6c;
  link6d = store.portfolio.link6d;
  link6e = store.portfolio.link6e;
  link6f = store.portfolio.link6f;
  link6aText = store.portfolio.link6aText;
  link6bText = store.portfolio.link6bText;
  link6cText = store.portfolio.link6cText;
  link6dText = store.portfolio.link6dText;
  link6eText = store.portfolio.link6eText;
  link6fText = store.portfolio.link6fText;
  // imgage 7
  img7 = store.portfolio.img7;
  alt7 = store.portfolio.alt7;
  title7 = store.portfolio.title7;
  paragraphPart7 = store.portfolio.paragraphPart7;
  link7 = store.portfolio.link7;
  link7b = store.portfolio.link7b;
  // NEW
  imgNew = store.featured.src;
  altNew = store.featured.alt;
  titleNew = store.featured.title;
  p1 = store.featured.p1;
  p2 = store.featured.p2;
  linkNew = store.featured.link;
  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}
}

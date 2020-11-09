import { Component } from '@angular/core';
import { store } from '../../../store/store';
import { Shared } from '../../../utils/shared';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  // --> props
  // common
  star = store.portfolio.star;
  stars = store.portfolio.stars;
  linkText = store.portfolio.linkText;
  linkText2 = store.portfolio.linkText2;
  linkText3 = store.portfolio.linkText3;
  visitList = store.portfolio.visitList;
  visitThis = store.portfolio.visitThis;
  visitThese = store.portfolio.visitThese;
  // imgage 1
  img1 = store.portfolio.img1;
  alt1 = store.portfolio.alt1;
  title1 = store.portfolio.title1;
  paragraphPart1 = store.portfolio.paragraphPart1;
  dontforget = store.portfolio.dontforget;
  link1 = store.portfolio.link1;
  linkPages = store.portfolio.linkPages;
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

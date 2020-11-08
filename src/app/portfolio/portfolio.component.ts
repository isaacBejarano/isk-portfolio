import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { store } from '../store/store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  // common
  star: string;
  stars: string;
  linkText: string;
  linkText2: string;
  visitList: string;
  visitThis: string;
  visitThese: string;
  // imgage 1
  img1: string;
  alt1: string;
  title1: string;
  paragraphPart1: string;
  paragraphPart1B: string;
  link1: string;
  linkPages: string;
  // imgage 2
  img2: string;
  alt2: string;
  title2: string;
  paragraphPart2: string;
  link2: string;
  // imgage 3
  img3: string;
  alt3: string;
  title3: string;
  paragraphPart3: string;
  link3: string;
  // imgage 4
  img4: string;
  alt4: string;
  title4: string;
  paragraphPart4: string;
  link4: string;
  // imgage 5
  img5: string;
  alt5: string;
  title5: string;
  paragraphPart5: string;
  link5: string;
  // imgage 6
  img6: string;
  alt6: string;
  title6: string;
  link6a: string;
  link6b: string;
  link6c: string;
  link6d: string;
  link6e: string;
  link6f: string;
  link6aText: string;
  link6bText: string;
  link6cText: string;
  link6dText: string;
  link6eText: string;
  link6fText: string;
  // imgage 7
  img7: string;
  alt7: string;
  title7: string;
  paragraphPart7: string;
  link7: string;
  // image NEW
  imgNew: string;
  altNew: string;
  titleNew: string;
  p1: string;
  p2: string;
  linkNew: string;
  // methods shared
  openLink: () => void;

  constructor() {}

  ngOnInit(): void {
    // --> props
    // common
    this.star = store.portfolio.star;
    this.stars = store.portfolio.stars;
    this.linkText = store.portfolio.linkText;
    this.linkText2 = store.portfolio.linkText2;
    this.visitList = store.portfolio.visitList;
    this.visitThis = store.portfolio.visitThis;
    this.visitThese = store.portfolio.visitThese;
    // imgage 1
    this.img1 = store.portfolio.img1;
    this.alt1 = store.portfolio.alt1;
    this.title1 = store.portfolio.title1;
    this.paragraphPart1 = store.portfolio.paragraphPart1;
    this.paragraphPart1B = store.portfolio.paragraphPart1B;
    this.link1 = store.portfolio.link1;
    this.linkPages = store.portfolio.linkPages;
    // imgage 2
    this.img2 = store.portfolio.img2;
    this.alt2 = store.portfolio.alt2;
    this.title2 = store.portfolio.title2;
    this.paragraphPart2 = store.portfolio.paragraphPart2;
    this.link2 = store.portfolio.link2;
    // imgage 3
    this.img3 = store.portfolio.img3;
    this.alt3 = store.portfolio.alt3;
    this.title3 = store.portfolio.title3;
    this.paragraphPart3 = store.portfolio.paragraphPart3;
    this.link3 = store.portfolio.link3;
    // imgage 4
    this.img4 = store.portfolio.img4;
    this.alt4 = store.portfolio.alt4;
    this.title4 = store.portfolio.title4;
    this.paragraphPart4 = store.portfolio.paragraphPart4;
    this.link4 = store.portfolio.link4;
    // imgage 5
    this.img5 = store.portfolio.img5;
    this.alt5 = store.portfolio.alt5;
    this.title5 = store.portfolio.title5;
    this.paragraphPart5 = store.portfolio.paragraphPart5;
    this.link5 = store.portfolio.link5;
    // imgage 6
    this.img6 = store.portfolio.img6;
    this.alt6 = store.portfolio.alt6;
    this.title6 = store.portfolio.title6;
    this.link6a = store.portfolio.link6a;
    this.link6b = store.portfolio.link6b;
    this.link6c = store.portfolio.link6c;
    this.link6d = store.portfolio.link6d;
    this.link6e = store.portfolio.link6e;
    this.link6f = store.portfolio.link6f;
    this.link6aText = store.portfolio.link6aText;
    this.link6bText = store.portfolio.link6bText;
    this.link6cText = store.portfolio.link6cText;
    this.link6dText = store.portfolio.link6dText;
    this.link6eText = store.portfolio.link6eText;
    this.link6fText = store.portfolio.link6fText;
    // imgage 7
    this.img7 = store.portfolio.img7;
    this.alt7 = store.portfolio.alt7;
    this.title7 = store.portfolio.title7;
    this.paragraphPart7 = store.portfolio.paragraphPart7;
    this.link7 = store.portfolio.link7;
    // NEW
    this.imgNew = store.featured.src;
    this.altNew = store.featured.alt;
    this.titleNew = store.featured.title;
    this.p1 = store.featured.p1;
    this.p2 = store.featured.p2;
    this.linkNew = store.featured.link;
    // --> shared methods
    this.openLink = store.openLink;
  }
}

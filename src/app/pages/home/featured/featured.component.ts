import { Component, OnInit } from '@angular/core';
import { store } from '../../../store/store';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  title: string;
  subtitle: string;
  id: string;
  src: string;
  alt: string;
  link: string;
  linkText: string;
  p1: string;
  p2: string;
  // common
  visitThis: string;
  star: string;
  openLink: () => void;

  constructor() {}

  ngOnInit(): void {
    // --> props
    this.title = store.featured.title;
    this.subtitle = store.featured.subtitle;
    this.id = store.featured.id;
    this.src = store.featured.src;
    this.alt = store.featured.alt;
    this.link = store.featured.link;
    this.linkText = store.featured.linkText;
    this.p1 = store.featured.p1;
    this.p2 = store.featured.p2;
    // common
    this.visitThis = store.portfolio.visitThis;
    this.star = store.portfolio.star;
    // --> shared methods
    this.openLink = store.openLink;
  }
}

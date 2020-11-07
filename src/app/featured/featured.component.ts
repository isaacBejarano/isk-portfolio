import { Component, OnInit } from '@angular/core';
import { store } from '../store/store';

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
  p3: string;
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
    this.p3 = store.featured.p3;
    // --> shared methods
    this.openLink = store.openLink;
  }
}

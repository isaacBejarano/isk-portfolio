import { Component, OnInit } from '@angular/core';
import { store } from '../../store/store';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title: string;
  hello: string;
  p1a: string;
  p1b: string;
  p1c: string;
  p2a: string;
  p2b: string;
  p2c: string;
  p3a: string;
  p3link: string;
  p3linkText: string;
  p3b: string;
  stak1: string;
  stak2: string;
  p3c: string;
  bye: string;
  openLink: () => boolean;

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0); // to counter balance JQuery Animation trail
    // --> props
    this.title = store.about.title;
    this.hello = store.about.hello;
    this.p1a = store.about.p1a;
    this.p1b = store.about.p1b;
    this.p1c = store.about.p1c;
    this.p2a = store.about.p2a;
    this.p2b = store.about.p2b;
    this.p2c = store.about.p2c;
    this.p3a = store.about.p3a;
    this.p3link = store.about.p3link;
    this.p3linkText = store.about.p3linkText;
    this.p3b = store.about.p3b;
    this.p3b = store.about.p3b;
    this.p3c = store.about.p3c;
    this.stak1 = store.about.stak1;
    this.stak2 = store.about.stak2;
    this.bye = store.about.bye;
    // --> shared methods
    this.openLink = store.openLink;
  }
}

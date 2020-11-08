import { Component, OnInit } from '@angular/core';
import { store } from '../store/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  root: '/';
  home: string;
  homeSrc: string;
  homeAlt: string;
  hamburger: string;
  page1: string;
  page2: string;
  page3: string;
  page4: string;
  hashIt: (ref: string) => string;
  capitalLetter: (ref: string) => string;

  constructor() {}

  ngOnInit(): void {
    // --> props
    this.home = store.navbar.home;
    this.homeSrc = store.navbar.homeSrc;
    this.homeAlt = store.navbar.homeAlt;
    this.hamburger = store.navbar.hamburger;
    this.page1 = store.navbar.page1;
    this.page2 = store.navbar.page2;
    this.page3 = store.navbar.page3;
    this.page4 = store.navbar.page4;
    // --> shared methods
    this.hashIt = store.hashIt;
    this.capitalLetter = store.capitalLetter;
  }
}

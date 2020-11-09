import { Component, OnInit } from '@angular/core';
import { store } from '../../store/store';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {
  icon: string;
  home: string;
  hashIt: (ref: string) => string;

  constructor() {}

  ngOnInit(): void {
    // --> props
    this.icon = store.scroll.icon;
    this.home = store.navbar.home;
    // --> shared methods
    this.hashIt = store.hashIt;
  }
}

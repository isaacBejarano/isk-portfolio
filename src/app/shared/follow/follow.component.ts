import { Component, OnInit } from '@angular/core';
import { store } from '../../store/store';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
})
export class FollowComponent implements OnInit {

  icon1: string;
  link1: string;
  icon2: string;
  link2: string;
  openLink: () => boolean;

  constructor() {}

  ngOnInit(): void {
    // --> props
    this.icon1 = store.social.icon1;
    this.link1 = store.social.link1;
    this.icon2 = store.social.icon2;
    this.link2 = store.social.link2;
    // --> shared methods
    this.openLink = store.openLink;
  }

}

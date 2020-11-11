import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
})
export class FollowComponent {
  // --> props
  icon1 = store.social.icon1;
  link1 = store.social.link1;
  icon2 = store.social.icon2;
  link2 = store.social.link2;
  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}
}

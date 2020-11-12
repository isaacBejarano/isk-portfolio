import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
})
export class FollowComponent {
  follow = store.getFollow as object | any;

  // <- shared methods
  openLink = Shared.openLink;

  constructor() {}
}

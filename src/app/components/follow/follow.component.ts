import { Component, Input } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  standalone: false,
})
export class FollowComponent {
  follow = store.getFollow;
  @Input() showFollow = true;
  @Input() css = '';

  openLink = Shared.openLink;

  // faLinkedin = faLinkedin; FIXME:
  // faGithub = faGithub; FIXME:
}

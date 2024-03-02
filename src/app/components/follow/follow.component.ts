import { Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
})
export class FollowComponent {
  follow = store.getFollow;

  openLink = Shared.openLink;

  faLinkedin = faLinkedin;
  faGithub = faGithub;
}

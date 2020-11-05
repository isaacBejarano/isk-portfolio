import { Component } from '@angular/core';
import { Shared } from '../utils/shared';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  follow = 'Follow me on';

  link1 = 'https://www.linkedin.com/in/isaac-bejarano';
  faIcon1 = 'fab fa-fw fa-linkedin-in';

  link2 = 'https://github.com/isaacBejarano';
  faIcon2 = 'fab fa-github';

  constructor() {}

  // methods
  openLink(): boolean {
    return Shared.openLink();
  }
}

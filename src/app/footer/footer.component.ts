import { Component } from '@angular/core';
import { Shared } from '../utils/shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  tool = 'Angular';
  toolLink = 'https://angular.io';
  theme = 'Start Bootstrap Theme';
  themeLink = 'https://startbootstrap.com/previews/freelancer/';
  license = 'MIT';
  copyright = 'Isaac Bejarano 2020';

  constructor() {}

  // methods
  openLink(): boolean {
    return Shared.openLink();
  }
}

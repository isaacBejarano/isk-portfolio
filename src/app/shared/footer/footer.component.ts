import { Component } from '@angular/core';
import { store } from '../../store/store';
import { Shared } from '../../utils/shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // --> props
  tool = store.footer.tool;
  theme = store.footer.theme;
  link1 = store.footer.link1;
  link2 = store.footer.link2;
  license = store.footer.license;
  copyright = store.footer.copyright;
  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}
}

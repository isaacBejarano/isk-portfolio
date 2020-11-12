import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '../../../store/store';

@Component({
  selector: 'app-privacy-en',
  templateUrl: './privacy-en.component.html',
})
export class PrivacyEnComponent {
  lgpd = store.getLgpd as object | any; // lgpd.en - English

  // <- shared methods
  openLink = Shared.openLink;

  constructor() {}
}

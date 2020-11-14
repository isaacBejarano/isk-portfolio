import { Component } from '@angular/core';
import { Shared } from '../../../utils/shared';
import { store } from '../../../store/store';

@Component({
  selector: 'app-privacy-es',
  templateUrl: './privacy-es.component.html',
  styleUrls: ['./privacy-es.component.scss'],
})
export class PrivacyEsComponent {
  lgpd = store.getLgpd as object | any; // lgpd.es - Spanish

  // <- shared methods
  openLink = Shared.openLink;

  constructor() {}
}

import { Component } from '@angular/core';
import { store } from '@app/data/store';

@Component({
  selector: 'app-masterhead',
  templateUrl: './masterhead.component.html',
  styleUrls: ['./masterhead.component.scss'],
})
export class MasterheadComponent {
  // prop -> to <app-divider> Input()
  divider = 'divider-light';

  masterhead = store.getMasterhead;

  constructor() {}
}

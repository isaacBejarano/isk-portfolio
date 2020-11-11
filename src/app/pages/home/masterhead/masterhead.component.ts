import { Component } from '@angular/core';
import { store } from '../../../store/store';

@Component({
  selector: 'app-masterhead',
  templateUrl: './masterhead.component.html',
  styleUrls: ['./masterhead.component.scss'],
})
export class MasterheadComponent {
  // props to Input()
  divider = 'divider-light';

  // --> props
  src = store.masterhead.src;
  alt = store.masterhead.alt;
  name = store.masterhead.name;
  title = store.masterhead.title;

  constructor() {}
}

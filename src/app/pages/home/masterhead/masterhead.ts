import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Divider } from '@app/components/divider/divider';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-masterhead',
  templateUrl: './masterhead.html',
  styleUrls: ['./masterhead.css'],
  imports: [Divider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Masterhead {
  // prop -> to <isk-divider> Input()
  divider = 'divider-light';

  masterhead = store.getMasterhead;

  constructor() {}
}

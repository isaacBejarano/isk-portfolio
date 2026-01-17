import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from '@app/components/divider/divider.component';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-masterhead',
  templateUrl: './masterhead.component.html',
  styleUrls: ['./masterhead.component.css'],
  imports: [DividerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterheadComponent {
  // prop -> to <isk-divider> Input()
  divider = 'divider-light';

  masterhead = store.getMasterhead;

  constructor() {}
}

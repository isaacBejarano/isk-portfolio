import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Divider } from '@app/divider/divider';

@Component({
  selector: 'isk-about',
  templateUrl: './about.html',
  imports: [Divider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Masterhead {
  // DUMMY
  readonly about = input.required<StoreAbout>();
}

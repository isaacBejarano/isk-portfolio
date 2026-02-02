import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { isOpenLink } from '@app/utils/nav-utils';

@Component({
  selector: 'isk-footer',
  templateUrl: './footer.html',
  imports: [TitleCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  // DUMMY
  readonly footer = input.required<StoreFooter>();
  protected readonly year = new Date().getFullYear();
  isOpenLink = isOpenLink;
}

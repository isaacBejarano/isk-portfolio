import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  input,
  type OnInit,
  signal,
} from '@angular/core';

import { Scroller } from '@app/scroll/scroll';
import { hash } from '@app/utils/string-utils';

@Component({
  selector: 'isk-header',
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Scroller],
})
export class Header implements OnInit {
  // DI
  private readonly _doc = inject(DOCUMENT).defaultView;

  // DUMMY
  ////

  hash = hash;

  readonly scrollable = input.required<Anchor[]>();

  readonly nav = input.required<Pick<StoreNav, 'alt' | 'src'>>();
  readonly anchors = input.required<Record<string, Anchor>>();
  readonly currentAnchor = input.required<Anchor>();

  protected readonly collapsed = signal(true);

  ngOnInit(): void {
    this.toggle(true);
  }

  protected toggle(init: boolean) {
    if (!this._doc?.visualViewport) return;

    const md = parseInt(this._doc.visualViewport?.width.toFixed(0), 10);
    if (md < 768) this.collapsed.update((v) => (init ? true : !v));
    else this.collapsed.set(false);
  }
}

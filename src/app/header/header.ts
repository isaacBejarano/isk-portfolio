import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DOCUMENT,
  inject,
  input,
  type OnInit,
  signal,
} from '@angular/core';

import { Scroller } from '@app/scroll/scroll';
import { hashIt } from '@app/utils/string-utils';

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

  readonly navbar = input.required<StoreNav>();
  protected readonly collapsed = signal(true);
  hashIt = hashIt;

  protected readonly anchors = computed(() => {
    const { anchor0, anchor1, anchor2, anchor3 } = {
      ...this.navbar(),
    };
    return [anchor0, anchor1, anchor2, anchor3];
  });

  ngOnInit(): void {
    this.toggle(true);
  }

  protected toggle(init: boolean) {
    const md = parseInt(this._doc.visualViewport.width.toFixed(0), 10);
    if (md < 768) this.collapsed.update((v) => (init ? true : !v));
    else this.collapsed.set(false);
  }
}

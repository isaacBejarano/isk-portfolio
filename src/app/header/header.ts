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
import { ScrollService } from '@app/scroll/scroll-service';
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

  readonly scrollable = input.required<Anchor[]>();

  readonly nav = input.required<Pick<StoreNav, 'alt' | 'src'>>();
  readonly anchors = input.required<Record<string, Anchor>>();
  readonly currentAnchor = input.required<Anchor>();

  // readonly $anchor = output<Anchor>();
  protected readonly collapsed = signal(true);
  hash = hash;

  // protected readonly nav = computed(() => {
  //   const { src, alt } = { ...this.storeNav() };
  //   return { src, alt };
  // });

  // protected readonly anchors = computed<Record<string, Anchor>>(() => {
  //   const { anchor0, anchor1, anchor2, anchor3, anchor4 } = {
  //     ...this.storeNav(),
  //   };
  //   return { anchor0, anchor1, anchor2, anchor3, anchor4 };
  // });

  // protected readonly scrollable = computed<Anchor[]>(() =>
  //   Object.entries(this.anchors()).map((entry) => entry[1]),
  // );

  // protected emitAnchor(anchor: Anchor) {
  //   if (anchor.length === 0) return;
  //   this.$anchor.emit(anchor);
  // }

  ngOnInit(): void {
    this.toggle(true);
  }

  protected toggle(init: boolean) {
    const md = parseInt(this._doc.visualViewport.width.toFixed(0), 10);
    if (md < 768) this.collapsed.update((v) => (init ? true : !v));
    else this.collapsed.set(false);
  }
}

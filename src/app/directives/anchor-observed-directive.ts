import {
  computed,
  Directive,
  ElementRef,
  inject,
  type OnDestroy,
  type OnInit,
  output,
  signal,
} from '@angular/core';

import { ScrollService } from '@app/scroll/scroll-service';
import { StoreService } from '@app/store/store-service';

type Viewported = { a: Anchor; order: number };

@Directive({
  selector: '[iskAnchorObserved]',
  standalone: true,
})
export class AnchorObservedDirective implements OnInit, OnDestroy {
  // DI
  private readonly _nativeEl = inject(ElementRef).nativeElement; // element ref using this directive
  private readonly _storeSrv = inject(StoreService);
  private readonly _scrollSrv = inject(ScrollService);

  // MODEL
  private readonly _store = this._storeSrv.store;

  // CTRL
  ////

  readonly $iskVisible = output<Anchor>();
  private readonly _storeNav = signal<StoreNav>(this._store().get('navbar'));
  private readonly _anchors = computed(() => {
    const { anchor0, anchor1, anchor2, anchor3, anchor4 } = {
      ...this._storeNav(),
    };
    return { anchor0, anchor1, anchor2, anchor3, anchor4 };
  });
  private readonly _scrollable = computed<Anchor[]>(() =>
    Object.entries(this._anchors()).map((entry) => entry[1]),
  );

  private readonly _viewported = this._scrollSrv.viewported;

  private _intersectionObs = signal(
    new IntersectionObserver((entries) => {
      const viewported = JSON.stringify(<Viewported>{
        a: this._nativeEl.id,
        order: Number.parseInt(this._nativeEl.dataset.order, 10),
      });

      // Now...
      if (entries[0].isIntersecting) {
        this._viewported.update((set) => {
          set.add(viewported);
          return set;
        });

        const anchor = JSON.parse(viewported).a;
        if (['header', 'footer'].includes(anchor)) {
          const limit = {
            header: 0,
            footer: this._scrollable().indexOf('footer'),
          };
          this._setAnchor(limit[anchor]);
        } else {
          const cursor = this._cursor();
          this._setAnchor(cursor);
        }
      } else {
        this._viewported.update((set) => {
          set.delete(viewported);
          return set;
        });

        const cursor = this._cursor();
        this._setAnchor(cursor);
      }
    }),
  );

  ngOnInit() {
    this._intersectionObs().observe(this._nativeEl);
  }

  ngOnDestroy() {
    this._intersectionObs()?.disconnect();
  }

  // AUX

  private _cursor(): number {
    const viewportedIdxs = Array.from(this._viewported())
      .map((anchor: string) => (JSON.parse(anchor) as Viewported).order)
      .sort();
    return viewportedIdxs[0];
  }

  private _setAnchor(limit: number = 0): void {
    this._scrollSrv.anchor.set(this._scrollable()[limit]);
  }

  // NOTE: Added <html.scroll-smooth> for a smother interpolation on scrolling
}

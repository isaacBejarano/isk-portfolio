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
  private readonly _nativeEl = inject(ElementRef).nativeElement; // the HTML element using the directive
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
      const anchor = JSON.stringify(<Viewported>{
        a: this._nativeEl.id,
        order: Number.parseInt(this._nativeEl.dataset.order, 10),
      });

      // Now...
      if (entries[0].isIntersecting) {
        console.warn('Intersected -->', JSON.parse(anchor).a, JSON.parse(anchor).order);
        // eclude rightmost:footer
        this._viewported.update((set) => {
          set.add(anchor);
          return set;
        });

        const viewportedIdxs = Array.from(this._viewported())
          .map((anchor: string) => (JSON.parse(anchor) as Viewported).order)
          .sort();
        const cursor = viewportedIdxs[0];

        if (JSON.parse(anchor).a === <Anchor>'header') {
          this._setAnchor(0);
        } else if (JSON.parse(anchor).a === <Anchor>'footer') {
          const footerIdx = this._scrollable().indexOf('footer');
          this._setAnchor(footerIdx);
        } else this._setAnchor(cursor);

        // const viewportedIdx = Array.from(this._viewported())
        //   .map((anchor: string) => JSON.parse(anchor) as Viewported)
        //   .map((anchor) => anchor.order)
        //   .sort();
        // const leftmostIdx = viewportedIdx[0] === 0 ? 1 : viewportedIdx[0]; // exclude header:0

        // console.log('leftmost --> ', leftmostIdx);

        // this._scrollSrv.anchor.set(this._scrollable()[leftmostIdx]);
      } else {
        console.error('NOT Intersected -->', JSON.parse(anchor).a, JSON.parse(anchor).order);

        // if (JSON.parse(anchor).a === <Anchor>'footer') {
        this._viewported.update((set) => {
          set.delete(anchor);
          return set;
        });
        // }

        const viewportedIdxs = Array.from(this._viewported())
          .map((anchor: string) => (JSON.parse(anchor) as Viewported).order)
          .sort();
        const cursor = viewportedIdxs[0];

        // if (JSON.parse(anchor).a === <Anchor>'header') {
        //   this._setAnchor(0 + 1);
        // } else if (JSON.parse(anchor).a === <Anchor>'footer') {
        //   const footerIdx = this._scrollable().indexOf('footer');
        //   this._setAnchor(footerIdx);
        // } else
        this._setAnchor(cursor);

        // const viewportedIdx = Array.from(this._viewported())
        //   .map((anchor: string) => JSON.parse(anchor) as Viewported)
        //   .map((anchor) => anchor.order)
        //   .sort();
        // const leftmostIdx = viewportedIdx[0] === 0 ? 1 : viewportedIdx[0]; // exclude header:0

        // console.log('leftmost --> ', leftmostIdx);

        // this._scrollSrv.anchor.set(this._scrollable()[leftmostIdx]);
      }
    }),
  );

  private _setAnchor(limit: number = 0) {
    console.log('limit --> ', limit);
    this._scrollSrv.anchor.set(this._scrollable()[limit]);
  }

  // TODO: add fade-in FX

  ngOnInit() {
    this._intersectionObs().observe(this._nativeEl);
  }

  ngOnDestroy() {
    this._intersectionObs()?.disconnect();
  }
}

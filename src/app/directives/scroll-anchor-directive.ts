import {
  Directive,
  ElementRef,
  inject,
  input,
  type OnDestroy,
  type OnInit,
  output,
  signal,
} from '@angular/core';
import { ScrollService } from '@app/scroll/scroll-service';

type Viewported = { a: Anchor; order: number };

@Directive({
  selector: '[iskScrollAnchor]',
  standalone: true,
})
export class ScrollAnchorDirective implements OnInit, OnDestroy {
  // DI
  private readonly _scrollSrv = inject(ScrollService);
  private readonly _nativeEl = inject(ElementRef).nativeElement; // using this directive

  // DUMMY
  ////

  readonly scrollable = input.required<Anchor[]>();
  readonly $iskAnchor = output<Anchor>();

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
            footer: this.scrollable().indexOf('footer'),
          };
          this._emitAnchor(limit[anchor]);
        } else {
          const cursor = this._cursor();
          this._emitAnchor(cursor);
        }
      } else {
        this._viewported.update((set) => {
          set.delete(viewported);
          return set;
        });

        const cursor = this._cursor();
        this._emitAnchor(cursor);
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

  private _emitAnchor(limit: number = 0): void {
    this.$iskAnchor.emit(this.scrollable()[limit]);
  }

  // NOTE: Added <html.scroll-smooth> for a smother interpolation on scrolling
}

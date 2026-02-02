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
  private readonly _scrollable = computed(() =>
    Object.entries(this._anchors()).map((entry) => entry[1]),
  );

  private readonly _lastIdx = computed(() =>
    this._scrollable().indexOf(this._scrollSrv.anchor()),
  );

  private readonly _enteredIdx = signal(0);

  private _intersectionObs = signal(
    new IntersectionObserver(
      (entries) => {
        const cursorIdx = this._scrollable().indexOf(this._nativeEl.id);

        // console.log(entries[0].isIntersecting);

        if (entries[0].isIntersecting && cursorIdx > this._lastIdx()) {
          console.log('entering...', this._nativeEl.id);
          this._enteredIdx.set(cursorIdx);
          this._scrollSrv.anchor.set(this._scrollable()[cursorIdx]);
        } else if (entries[0].isIntersecting && cursorIdx < this._lastIdx()) {
          console.log('leaving...', this._nativeEl.id);
        } else if (entries[0].isIntersecting && cursorIdx === this._lastIdx()) {
          console.log('same anchor...', this._nativeEl.id);
          if (this._nativeEl.id === <Anchor>'header') {
            this._scrollSrv.anchor.set('header');
          }
        } else if (
          !entries[0].isIntersecting &&
          cursorIdx === this._lastIdx()
        ) {
          console.log('not intersect...', this._nativeEl.id);

          if (cursorIdx < this._enteredIdx()) {
            this._scrollSrv.anchor.set(this._scrollable()[cursorIdx + 1]); // down
          } else if (cursorIdx === this._enteredIdx()) {
            this._scrollSrv.anchor.set(this._scrollable()[cursorIdx - 1]); // up
          } else if (cursorIdx > this._enteredIdx()) {
            console.log('INTERSECTED');
          }
        } else if (!entries[0].isIntersecting && cursorIdx < this._lastIdx()) {
          console.warn('jump?');
        } else console.error('uncaught');

        // TODO: memoize here the RIGHTMOST index of anchor.
        // e.g. if viewport has 3 anchors, state here the last one (the one closer to bottom of viewport)
        // then set that anchor as current
        // e.g. header, about, portfolio --> save portfolio
        // e.g. header, about --> save about
        // e.g. header --> save header
        // console.log(this._scrollSrv.anchor());

        // console.log(entries[0].intersectionRatio);
        // console.log(entries[0].isIntersecting);

        // if (entries[0].isIntersecting) {
        // console.log(entries[0].isIntersecting, this._nativeEl.id);
        // this._intersectionObs.unobserve(entries[0].target);
        // Emitimos el ID del elemento cuando es visible
        // this.visible.emit(this._nativeEl.id);
        // } else console.error('leaving...', entries[0].target);
        // TODO: add fade-in FX
      },
      {
        // threshold: 0.1,
        // Ajusta este "umbral" según necesites
        // FIXME:
        // rootMargin: '-200px 0px -200px',
        /*
        Esto crea una "línea invisible" en el viewport:
          El elemento no se considera "activo" en cuanto toca el borde inferior, sino cuando entra en la zona central/superior.
          Esto evita que dos secciones se marquen como activas al mismo tiempo si son pequeñas
        */
      },
    ),
  );

  ngOnInit() {
    this._intersectionObs().observe(this._nativeEl);
  }

  ngOnDestroy() {
    this._intersectionObs()?.disconnect();
  }
}

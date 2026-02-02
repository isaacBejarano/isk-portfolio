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
  private readonly _lastIdx = computed<number>(() =>
    this._scrollable().indexOf(this._scrollSrv.anchor()),
  );

  private readonly _viewported = this._scrollSrv.viewported;
  // private readonly _enteredIdx = signal(0);

  private _intersectionObs = signal(
    new IntersectionObserver(
      (entries) => {
        const cursorIdx = this._scrollable().indexOf(this._nativeEl.id);

        // FIXME: En mobile sí funciona, porque sólo hay 1 seccion en viewport a la vez
        // snapshot
        if (entries[0].isIntersecting) {
          console.warn('ON VIEWPORT NOW...', this._nativeEl.id, this._nativeEl.dataset.order);

          const newAnchor = JSON.stringify(<Viewported>{
            a: this._nativeEl.id,
            order: Number.parseInt(this._nativeEl.dataset.order, 10),
          });
          this._viewported.add(newAnchor);

          console.table(Array.from(this._viewported).map((anchor: string) => JSON.parse(anchor)));
          const viewportedIdx = Array.from(this._viewported)
            .map((anchor: string) => JSON.parse(anchor) as Viewported)
            .map((anchor) => anchor.order)
            .sort();
          console.warn(viewportedIdx);
          this._scrollSrv.anchor.set(this._scrollable()[viewportedIdx.pop()]);
        }

        // console.log(entries[0].isIntersecting);

        if (entries[0].isIntersecting && cursorIdx > this._lastIdx()) {
          console.log('entering...', this._nativeEl.id);
          // bottom reached!
          if (this._nativeEl.id === <Anchor>'footer') {
            // visible.set([]); // cleanup
            this._viewported.add(JSON.stringify({ a: 'technologies', order: 3 }));
          }
          // top reached!
          else if (this._nativeEl.id === <Anchor>'header') {
            this._viewported.clear(); // cleanup
            this._viewported.add(JSON.stringify({ a: 'header', order: 0 })); // cleanup
          }

          // this._enteredIdx.set(cursorIdx);
          // this._scrollSrv.anchor.set(this._scrollable()[cursorIdx]);
        } else if (entries[0].isIntersecting && cursorIdx < this._lastIdx()) {
          console.log('leaving...', this._nativeEl.id);
        } else if (entries[0].isIntersecting && cursorIdx === this._lastIdx()) {
          console.log('same anchor...', this._nativeEl.id);
          if (this._nativeEl.id === <Anchor>'header') {
            // this._enteredIdx.set(0);
            // this._scrollSrv.anchor.set('header'); // _lastIdx:0
          }
        } else if (!entries[0].isIntersecting && cursorIdx === this._lastIdx()) {
          console.log('not intersect...', this._nativeEl.id);

          // if (cursorIdx < this._enteredIdx()) {
          // this._scrollSrv.anchor.set(this._scrollable()[cursorIdx + 1]); // down
          // } else if (cursorIdx === this._enteredIdx()) {
          // this._scrollSrv.anchor.set(this._scrollable()[cursorIdx - 1]); // up
          // } else if (cursorIdx > this._enteredIdx()) {
          // console.log('INTERSECTED');
          // }
        } else if (!entries[0].isIntersecting && cursorIdx < this._lastIdx()) {
          console.warn('jump?');
        } else console.error('uncaught');
      },
      {
        // threshold: 0.1,
        // Ajusta este "umbral" según necesites
        // FIXME: rootMargin: '-200px 0px -200px',
        /*
        Esto crea una "línea invisible" en el viewport:
          El elemento no se considera "activo" en cuanto toca el borde inferior, sino cuando entra en la zona central/superior.
          Esto evita que dos secciones se marquen como activas al mismo tiempo si son pequeñas
        */
      },
    ),
  );
  // TODO: add fade-in FX

  ngOnInit() {
    this._intersectionObs().observe(this._nativeEl);
  }

  ngOnDestroy() {
    this._intersectionObs()?.disconnect();
  }
}

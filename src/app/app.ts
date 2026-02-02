import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Follow } from '@app/follow/follow';
import { Footer } from '@app/footer/footer';
import { Header } from '@app/header/header';
import { ScrollAnchorDirective } from './directives/scroll-anchor-directive';
import { ScrollService } from './scroll/scroll-service';
import { StoreService } from './store/store-service';

@Component({
  selector: 'isk-root',
  templateUrl: './app.html',
  imports: [Header, Follow, Footer, RouterOutlet, ScrollAnchorDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // DI
  private readonly _scrollSrv = inject(ScrollService);
  private readonly _storeSrv = inject(StoreService);

  // MODEL
  private readonly _store = this._storeSrv.store;

  // CTRL
  ////

  protected readonly footer = signal<StoreFooter>(this._store().get('footer'));
  protected readonly follow = signal<StoreFollow>(this._store().get('follow'));

  private readonly _navbar = signal<StoreNav>(this._store().get('navbar'));

  protected readonly nav = computed<Pick<StoreNav, 'alt' | 'src'>>(() => {
    const { src, alt } = { ...this._navbar() };
    return { src, alt };
  });

  protected readonly anchors = computed<Record<string, Anchor>>(() => {
    const { anchor0, anchor1, anchor2, anchor3, anchor4 } = { ...this._navbar() };
    return { anchor0, anchor1, anchor2, anchor3, anchor4 };
  });

  protected readonly scrollable = computed<Anchor[]>(() =>
    Object.entries(this.anchors()).map((entry) => entry[1]),
  );

  protected readonly currentAnchor = this._scrollSrv.anchor;

  setAnchor(anchor: Anchor) {
    this._scrollSrv.anchor.set(anchor);
  }
}

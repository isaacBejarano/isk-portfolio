import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Follow } from '@app/follow/follow';
import { Footer } from '@app/footer/footer';
import { Header } from '@app/header/header';
import { AnchorObservedDirective } from './directives/anchor-observed-directive';
import { ScrollService } from './scroll/scroll-service';
import { StoreService } from './store/store-service';

@Component({
  selector: 'isk-root',
  templateUrl: './app.html',
  imports: [Header, Follow, Footer, RouterOutlet, AnchorObservedDirective],
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

  protected readonly storeNav = signal<StoreNav>(this._store().get('navbar'));
  protected readonly follow = signal<StoreFollow>(this._store().get('follow'));
  protected readonly footer = signal<StoreFooter>(this._store().get('footer'));

  onSectionActive(anchor: Anchor) {
    this._scrollSrv.anchor.set(anchor); // TODO:
  }
}

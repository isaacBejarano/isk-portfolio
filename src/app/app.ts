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
import { ObserveElementDirective } from './directives/anchor-observer-directive';
import { ScrollService } from './scroll/scroll-service';
import { Store } from './store-model';

@Component({
  selector: 'isk-root',
  templateUrl: './app.html',
  imports: [Header, Follow, Footer, RouterOutlet, ObserveElementDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // DI
  private readonly _scrollSrv = inject(ScrollService);

  // MODEL
  private readonly _model = new Store();

  // CTRL
  ////

  protected readonly navbar = signal<StoreNav>(this._model.get('navbar'));
  protected readonly follow = signal<StoreFollow>(this._model.get('follow'));
  protected readonly footer = signal<StoreFooter>(this._model.get('footer'));

  onSectionActive(anchor: unknown) {
    console.log(anchor);
    this._scrollSrv.anchor.set(anchor as Anchor);
  }
}

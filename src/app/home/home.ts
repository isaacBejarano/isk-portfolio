import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Masterhead } from '@app/about/about';
import { Portfolio } from '@app/portfolio/portfolio';
import { ScrollService } from '@app/scroll/scroll-service';
import { Skills } from '@app/skills/skills';
import { StoreService } from '@app/store/store-service';
import { getLast } from '@app/utils/array-utils';
import { isOpenLink } from '@app/utils/nav-utils';
import { ScrollAnchorDirective } from '../directives/scroll-anchor-directive';

@Component({
  selector: 'isk-home',
  templateUrl: './home.html',
  imports: [Masterhead, Portfolio, Skills, ScrollAnchorDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  // DI
  private readonly _scrollSrv = inject(ScrollService);
  private readonly _storeSrv = inject(StoreService);

  // MODEL
  private readonly _store = this._storeSrv.store;

  // CTRL
  ////

  getLast = getLast;
  isOpenLink = isOpenLink;

  protected readonly about = signal<StoreAbout>(this._store().get('about'));
  protected readonly portfolio = signal<StorePortfolio>(this._store().get('portfolio'));
  protected readonly skills = signal<StoreSkills>(this._store().get('skills'));

  private readonly _navbar = signal<StoreNav>(this._store().get('navbar'));

  private readonly _anchors = computed<Record<string, Anchor>>(() => {
    const { anchor0, anchor1, anchor2, anchor3, anchor4 } = { ...this._navbar() };
    return { anchor0, anchor1, anchor2, anchor3, anchor4 };
  });

  protected readonly scrollable = computed<Anchor[]>(() =>
    Object.entries(this._anchors()).map((entry) => entry[1]),
  );

  setAnchor(anchor: Anchor) {
    this._scrollSrv.anchor.set(anchor);
  }
}

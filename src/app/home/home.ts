import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { Featured } from '@app/featured/featured';
import { Masterhead } from '@app/masterhead/masterhead';
import { Portfolio } from '@app/portfolio/portfolio';
import { ScrollService } from '@app/scroll/scroll-service';
import { Skills } from '@app/skills/skills';
import { Store } from '@app/store-model';
import { getLast } from '@app/utils/array-utils';
import { isOpenLink } from '@app/utils/nav-utils';
import { ObserveElementDirective } from '../directives/anchor-observer-directive';

@Component({
  selector: 'isk-home',
  templateUrl: './home.html',
  imports: [Masterhead, Featured, Portfolio, Skills, ObserveElementDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  // DI
  private readonly _scrollSrv = inject(ScrollService);

  // MODEL
  private readonly _model = new Store();

  // CTRL
  ////

  protected readonly featured = signal<string>(this._model.get('featured'));
  protected readonly skills = signal<StoreSkills>(this._model.get('skills'));
  protected readonly masterhead = signal<StoreMasterhead>(
    this._model.get('masterhead'),
  );
  protected readonly portfolio = signal<StorePortfolio>(
    this._model.get('portfolio'),
  );

  isOpenLink = isOpenLink;
  getLast = getLast;

  onSectionActive(anchor: Anchor) {
    this._scrollSrv.anchor.set(anchor);
  }
}

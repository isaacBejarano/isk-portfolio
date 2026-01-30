import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Masterhead } from '@app/about/about';
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
  imports: [Masterhead, Portfolio, Skills, ObserveElementDirective],
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
  protected readonly about = signal<StoreAbout>(this._model.get('about'));
  protected readonly portfolio = signal<StorePortfolio>(
    this._model.get('portfolio'),
  );

  isOpenLink = isOpenLink;
  getLast = getLast;

  onSectionActive(anchor: Anchor) {
    this._scrollSrv.anchor.set(anchor);
  }
}

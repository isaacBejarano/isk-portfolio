import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';

import { hashIt } from '@app/utils/string-utils';
import { ScrollService } from './scroll-service';

@Component({
  selector: 'isk-scroll',
  templateUrl: './scroll.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scroller {
  // DI
  private readonly _scrollSrv = inject(ScrollService);
  protected readonly currentAnchor = this._scrollSrv.anchor;

  // CTRL
  ////

  readonly anchors = input.required<Anchor[]>();
  private readonly _hashIt = hashIt;

  protected scrollTo(step: 1 | -1): string {
    const currentIdx = this.anchors().indexOf(this.currentAnchor());
    console.log(currentIdx);
    const nextStep = currentIdx + step;

    if (nextStep < 0 || nextStep >= this.anchors().length) return '';
    return this._hashIt(this.anchors()[nextStep]);
  }

  protected voidAnchor(anchor: string): string {
    return this.isAnchor(anchor) ? anchor : 'javascripot:void(0)';
  }

  protected isAnchor(anchor: string): boolean {
    return anchor.length > 0;
  }
}

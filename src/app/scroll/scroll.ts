import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hash } from '@app/utils/string-utils';
@Component({
  selector: 'isk-scroll',
  templateUrl: './scroll.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scroller {
  // DI
  private readonly _sanitizer = inject(DomSanitizer);

  // DUMMY
  ////

  readonly currentAnchor = input.required<Anchor>();
  readonly scrollable = input.required<Anchor[]>();
  // readonly $anchor = output<Anchor>();

  private readonly _hash = hash;
  // private readonly _dehash = dehash;

  protected readonly pillCurrentAnchor = computed<Anchor | null>(() => {
    if (this.currentAnchor() === 'header' || this.currentAnchor() === 'footer') return null;
    return this.currentAnchor();
  });

  protected anchorAdjacent(step: 1 | -1) {
    const prevIdx = this.scrollable().indexOf(this.currentAnchor()) + step;
    const anchor = this.scrollable()[prevIdx];
    return anchor
      ? this._hash(anchor)
      : this._sanitizer.bypassSecurityTrustUrl('javascript:void(0)');
  }

  // protected emitAnchor(anchorRef: HTMLAnchorElement) {
  //   if (anchorRef.hash.length === 0) return;
  //   this.$anchor.emit(this._dehash(anchorRef.hash) as Anchor);
  // }

  protected isAnchorVoid(icon: 'top' | 'bot'): boolean {
    // FIXME: update currentAnchor from directive too
    return (
      (this.currentAnchor() === 'header' && icon === 'top') ||
      (this.currentAnchor() === 'footer' && icon === 'bot')
    );
  }
}
